import { auth } from "@clerk/nextjs/server";
import { createClerkClient } from "@clerk/nextjs/server";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const { userId: adminId } = await auth();
    
    if (!adminId) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    // Create Clerk client
    const clerkClient = createClerkClient({
      secretKey: process.env.CLERK_SECRET_KEY,
    });

    // Check if current user is admin
    const currentUser = await clerkClient.users.getUser(adminId);
    const isAdmin = currentUser.publicMetadata?.role === "admin";
    
    if (!isAdmin) {
      return NextResponse.json({ error: "Forbidden" }, { status: 403 });
    }

    const { userId, action } = await req.json();

    if (!userId || !action) {
      return NextResponse.json({ error: "Missing parameters" }, { status: 400 });
    }

    // Check if this is a waitlist entry (starts with wle_) or a user ID
    const isWaitlistEntry = userId.startsWith('wle_');
    
    let user;
    let userEmail;
    
    if (isWaitlistEntry) {
      // Handle waitlist entry approval/rejection
      if (action === "approve") {
        // First, get the waitlist entry details to get the email
        const getResponse = await fetch(`https://api.clerk.com/v1/waitlist_entries/${userId}`, {
          headers: {
            'Authorization': `Bearer ${process.env.CLERK_SECRET_KEY}`,
          },
        });
        
        if (getResponse.ok) {
          const entryData = await getResponse.json();
          userEmail = entryData.email_address || entryData.identifier;
        }
        
        // For waitlist entries, we need to use the invite endpoint
        const response = await fetch(`https://api.clerk.com/v1/waitlist_entries/${userId}/invite`, {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${process.env.CLERK_SECRET_KEY}`,
            'Content-Type': 'application/json',
          },
        });
        
        if (!response.ok) {
          const errorData = await response.text();
          console.error('Failed to invite waitlist entry:', errorData);
          throw new Error('Failed to approve waitlist entry');
        }
        
        const data = await response.json();
        if (!userEmail) {
          userEmail = data.email_address || data.identifier || "user@example.com";
        }
        
        // After invitation, return success with email
        user = {
          id: userId,
          emailAddresses: [{ emailAddress: userEmail }],
        };
      } else {
        // First, get the email before deletion
        const getResponse = await fetch(`https://api.clerk.com/v1/waitlist_entries/${userId}`, {
          headers: {
            'Authorization': `Bearer ${process.env.CLERK_SECRET_KEY}`,
          },
        });
        
        if (getResponse.ok) {
          const entryData = await getResponse.json();
          userEmail = entryData.email_address || entryData.identifier || "user@example.com";
        }
        
        // For rejection, we can delete the waitlist entry
        const response = await fetch(`https://api.clerk.com/v1/waitlist_entries/${userId}`, {
          method: 'DELETE',
          headers: {
            'Authorization': `Bearer ${process.env.CLERK_SECRET_KEY}`,
          },
        });
        
        if (!response.ok) {
          const errorData = await response.text();
          console.error('Failed to reject waitlist entry:', errorData);
          throw new Error('Failed to reject waitlist entry');
        }
        
        user = {
          id: userId,
          emailAddresses: [{ emailAddress: userEmail }],
        };
      }
    } else {
      // Handle regular user approval/rejection
      const metadata = action === "approve" 
        ? { approved: true, rejected: false }
        : { approved: false, rejected: true };

      // Update user's public metadata
      await clerkClient.users.updateUser(userId, {
        publicMetadata: metadata,
      });

      // Get updated user info
      user = await clerkClient.users.getUser(userId);
      userEmail = user.emailAddresses[0]?.emailAddress;
    }
    
    // Send notification email (using the existing notifications endpoint)
    const notificationType = action === "approve" ? "user_approved" : "user_rejected";
    
    await fetch(`${process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000"}/api/notifications`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        type: notificationType,
        userEmail: user.emailAddresses[0]?.emailAddress,
        userId: user.id,
        userName: `${user.firstName || ""} ${user.lastName || ""}`.trim(),
      }),
    });

    return NextResponse.json({ 
      success: true, 
      user: {
        id: user.id,
        email: user.emailAddresses[0]?.emailAddress,
        status: action === "approve" ? "approved" : "rejected",
      }
    });
  } catch (error) {
    console.error("Error updating user status:", error);
    return NextResponse.json(
      { error: "Failed to update user status" },
      { status: 500 }
    );
  }
}