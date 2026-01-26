"use client";

import { useState, useEffect } from "react";
import { useUser } from "@clerk/nextjs";
import { UserButton } from "@clerk/nextjs";
import { useRouter } from "next/navigation";

interface WaitlistUser {
  id: string;
  email: string;
  firstName?: string;
  lastName?: string;
  createdAt: string;
  status: "pending" | "approved" | "rejected";
}

export default function AdminApprovalsPage() {
  const { user, isLoaded } = useUser();
  const router = useRouter();
  const [waitlistUsers, setWaitlistUsers] = useState<WaitlistUser[]>([]);
  const [loading, setLoading] = useState(true);
  const [processingId, setProcessingId] = useState<string | null>(null);

  useEffect(() => {
    if (isLoaded && user) {
      console.log("Current user ID:", user.id);
      console.log("User metadata:", user.publicMetadata);
      
      // Check if user is admin
      const isAdmin = user.publicMetadata?.role === "admin";
      
      if (!isAdmin) {
        console.log("User is not admin, redirecting...");
        router.push("/");
      } else {
        console.log("User is admin, fetching waitlist users...");
        fetchWaitlistUsers();
      }
    }
  }, [isLoaded, user, router]);

  const fetchWaitlistUsers = async () => {
    try {
      // Fetch real users from Clerk API
      const response = await fetch("/api/admin/waitlist-users");
      
      if (!response.ok) {
        throw new Error("Failed to fetch users");
      }
      
      const data = await response.json();
      const users: WaitlistUser[] = data.users.map((user: any) => ({
        id: user.id,
        email: user.email,
        firstName: user.firstName,
        lastName: user.lastName,
        createdAt: user.createdAt,
        status: user.status as "pending" | "approved" | "rejected",
      }));
      
      setWaitlistUsers(users);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching waitlist users:", error);
      setWaitlistUsers([]);
      setLoading(false);
    }
  };

  const handleApprove = async (userId: string, userEmail: string) => {
    setProcessingId(userId);
    
    try {
      // Call the approve API endpoint
      const response = await fetch("/api/admin/approve-user", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          userId,
          action: "approve",
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to approve user");
      }

      // Update user status in UI
      setWaitlistUsers(prev =>
        prev.map(u =>
          u.id === userId ? { ...u, status: "approved" as const } : u
        )
      );
      
      console.log(`User ${userId} approved`);
    } catch (error) {
      console.error("Error approving user:", error);
      alert("Failed to approve user");
    } finally {
      setProcessingId(null);
    }
  };

  const handleReject = async (userId: string, userEmail: string) => {
    setProcessingId(userId);
    
    try {
      // Call the approve API endpoint with reject action
      const response = await fetch("/api/admin/approve-user", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          userId,
          action: "reject",
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to reject user");
      }

      // Update user status in UI
      setWaitlistUsers(prev =>
        prev.map(u =>
          u.id === userId ? { ...u, status: "rejected" as const } : u
        )
      );
      
      console.log(`User ${userId} rejected`);
    } catch (error) {
      console.error("Error rejecting user:", error);
      alert("Failed to reject user");
    } finally {
      setProcessingId(null);
    }
  };

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-black">
        <div className="text-white">Loading...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900">
      <nav className="flex justify-between items-center p-6 border-b border-gray-800">
        <h1 className="text-2xl font-bold text-white">Admin Dashboard - Access Requests</h1>
        <div className="flex items-center gap-4">
          <span className="text-gray-400">Admin: {user?.emailAddresses[0].emailAddress}</span>
          <UserButton afterSignOutUrl="/" />
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-6 py-12">
        <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg border border-gray-700 overflow-hidden">
          <div className="p-6 border-b border-gray-700">
            <h2 className="text-xl font-semibold text-white">Pending Access Requests</h2>
            <p className="text-gray-400 mt-1">Review and manage user access requests</p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-900/50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                    User
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                    Email
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                    Request Date
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                    Status
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-700">
                {waitlistUsers.length === 0 ? (
                  <tr>
                    <td colSpan={5} className="px-6 py-12 text-center text-gray-400">
                      No pending requests
                    </td>
                  </tr>
                ) : (
                  waitlistUsers.map((user) => (
                    <tr key={user.id} className="hover:bg-gray-800/30 transition-colors">
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm font-medium text-white">
                          {user.firstName} {user.lastName}
                        </div>
                        <div className="text-sm text-gray-400">ID: {user.id}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">
                        {user.email}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">
                        {new Date(user.createdAt).toLocaleDateString()}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className={`px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full
                          ${user.status === "pending" ? "bg-yellow-900/50 text-yellow-400" : ""}
                          ${user.status === "approved" ? "bg-green-900/50 text-green-400" : ""}
                          ${user.status === "rejected" ? "bg-red-900/50 text-red-400" : ""}
                        `}>
                          {user.status}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                        {user.status === "pending" && (
                          <div className="flex gap-2">
                            <button
                              onClick={() => handleApprove(user.id, user.email)}
                              disabled={processingId === user.id}
                              className="px-3 py-1 bg-green-600 text-white rounded hover:bg-green-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                            >
                              {processingId === user.id ? "Processing..." : "Approve"}
                            </button>
                            <button
                              onClick={() => handleReject(user.id, user.email)}
                              disabled={processingId === user.id}
                              className="px-3 py-1 bg-red-600 text-white rounded hover:bg-red-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                            >
                              Reject
                            </button>
                          </div>
                        )}
                        {user.status !== "pending" && (
                          <span className="text-gray-500">Processed</span>
                        )}
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>

        <div className="mt-8 bg-gray-800/50 backdrop-blur-sm rounded-lg p-6 border border-gray-700">
          <h3 className="text-lg font-semibold text-white mb-4">Admin Actions</h3>
          <div className="space-y-3 text-sm text-gray-400">
            <p>• Approved users will receive an email with sign-in instructions</p>
            <p>• Rejected users will be notified via email</p>
            <p>• Users can re-apply after 30 days if rejected</p>
          </div>
        </div>
      </main>
    </div>
  );
}