import { auth } from "@clerk/nextjs/server";
import { createClerkClient } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

// Force dynamic rendering and no caching
export const dynamic = 'force-dynamic';
export const revalidate = 0;

export async function GET() {
  try {
    const { userId } = await auth();
    
    if (!userId) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    // Create Clerk client
    const clerkClient = createClerkClient({
      secretKey: process.env.CLERK_SECRET_KEY,
    });

    // Fetch the current user to check if they're admin
    const currentUser = await clerkClient.users.getUser(userId);
    const isAdmin = currentUser.publicMetadata?.role === "admin";
    
    if (!isAdmin) {
      return NextResponse.json({ error: "Forbidden" }, { status: 403 });
    }

    // Fetch all users from Clerk
    const { data: users } = await clerkClient.users.getUserList({
      limit: 100,
    });

    // Try to fetch waitlist entries if available
    let waitlistEntries = [];
    try {
      // Fetch actual waitlist entries from Clerk
      const response = await fetch('https://api.clerk.com/v1/waitlist_entries', {
        headers: {
          'Authorization': `Bearer ${process.env.CLERK_SECRET_KEY}`,
        },
      });
      
      if (response.ok) {
        const data = await response.json();
        waitlistEntries = data.data || [];
        console.log("Fetched waitlist entries:", waitlistEntries.length);
        console.log("Waitlist data:", waitlistEntries.map((e: any) => ({
          id: e.id,
          email: e.email_address,
          status: e.status
        })));
      }
    } catch (err) {
      console.log("Could not fetch waitlist entries:", err);
    }

    // Only show actual PENDING waitlist entries
    // Filter out completed/invited entries and only show pending ones
    const waitlistUsers = waitlistEntries
      .filter((entry: any) => entry.status === 'pending')
      .map((entry: any) => ({
        id: entry.id,
        email: entry.email_address || entry.identifier || "",
        firstName: "",
        lastName: "",
        createdAt: entry.created_at,
        status: entry.status || "pending",
        hasSession: false,
        isWaitlistEntry: true,
      }));

    return NextResponse.json(
      { users: waitlistUsers },
      { 
        headers: {
          'Cache-Control': 'no-store, no-cache, must-revalidate',
          'Pragma': 'no-cache',
        }
      }
    );
  } catch (error) {
    console.error("Error fetching waitlist users:", error);
    return NextResponse.json(
      { error: "Failed to fetch users" },
      { status: 500 }
    );
  }
}