import { Resend } from "resend";
import { NextRequest, NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  try {
    const { type, userEmail, userName, userId, adminAction } = await req.json();

    if (type === "waitlist_request") {
      // Send email to admin when someone requests access
      const { data, error } = await resend.emails.send({
        from: "onboarding@resend.dev",
        to: process.env.ADMIN_EMAIL || "admin@example.com",
        subject: "New Access Request - Vibe Trader",
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <h2 style="color: #333;">New Access Request</h2>
            <p>A new user has requested access to the Vibe Trader presentation:</p>
            <div style="background: #f5f5f5; padding: 15px; border-radius: 5px; margin: 20px 0;">
              <p><strong>Name:</strong> ${userName || "Not provided"}</p>
              <p><strong>Email:</strong> ${userEmail}</p>
              <p><strong>User ID:</strong> ${userId}</p>
            </div>
            <p>Please review this request in the admin dashboard:</p>
            <a href="${process.env.NEXT_PUBLIC_APP_URL}/admin/approvals" 
               style="display: inline-block; background: #4F46E5; color: white; padding: 10px 20px; text-decoration: none; border-radius: 5px;">
              Review Request
            </a>
          </div>
        `,
      });

      if (error) {
        console.error("Resend error:", error);
        return NextResponse.json({ error: error.message }, { status: 400 });
      }

      return NextResponse.json({ data });
    }

    if (type === "user_approved") {
      // Send approval email to user
      const { data, error } = await resend.emails.send({
        from: "onboarding@resend.dev",
        to: userEmail,
        subject: "Access Approved - Vibe Trader",
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <h2 style="color: #333;">Welcome to Vibe Trader!</h2>
            <p>Great news! Your access request has been approved.</p>
            <p>You can now sign in and view our exclusive pitch deck presentation:</p>
            <a href="${process.env.NEXT_PUBLIC_APP_URL}/sign-in" 
               style="display: inline-block; background: #10B981; color: white; padding: 12px 24px; text-decoration: none; border-radius: 5px; margin: 20px 0;">
              Sign In Now
            </a>
            <p style="color: #666; font-size: 14px;">
              If you have any questions, please don't hesitate to reach out to our team.
            </p>
          </div>
        `,
      });

      if (error) {
        console.error("Resend error:", error);
        return NextResponse.json({ error: error.message }, { status: 400 });
      }

      return NextResponse.json({ data });
    }

    if (type === "user_rejected") {
      // Send rejection email to user
      const { data, error } = await resend.emails.send({
        from: "onboarding@resend.dev",
        to: userEmail,
        subject: "Access Request Update - Vibe Trader",
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <h2 style="color: #333;">Access Request Update</h2>
            <p>Thank you for your interest in Vibe Trader.</p>
            <p>Unfortunately, we're unable to grant access at this time. We appreciate your understanding.</p>
            <p style="color: #666; font-size: 14px; margin-top: 30px;">
              If you believe this is an error or have questions, please contact our support team.
            </p>
          </div>
        `,
      });

      if (error) {
        console.error("Resend error:", error);
        return NextResponse.json({ error: error.message }, { status: 400 });
      }

      return NextResponse.json({ data });
    }

    return NextResponse.json({ error: "Invalid notification type" }, { status: 400 });
  } catch (error) {
    console.error("Notification error:", error);
    return NextResponse.json(
      { error: "Failed to send notification" },
      { status: 500 }
    );
  }
}