"use client";

import { UserButton } from "@clerk/nextjs";
import { useUser } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function PresentationPage() {
  const { isLoaded, isSignedIn, user } = useUser();
  const router = useRouter();

  useEffect(() => {
    if (isLoaded && !isSignedIn) {
      router.push("/sign-in");
    }
  }, [isLoaded, isSignedIn, router]);

  if (!isLoaded || !isSignedIn) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-black">
        <div className="text-white">Loading...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900">
      <nav className="flex justify-between items-center p-6 border-b border-gray-800">
        <h1 className="text-2xl font-bold text-white">Vibe Trader × MarketGauge</h1>
        <div className="flex items-center gap-4">
          <span className="text-gray-400">Welcome, {user.firstName || user.emailAddresses[0].emailAddress}</span>
          <UserButton afterSignOutUrl="/" />
        </div>
      </nav>

      <main className="max-w-4xl mx-auto px-6 py-16">
        <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-10 border border-gray-700">
          <p className="text-sm uppercase tracking-widest text-blue-400 mb-3">Discovery & Scoping</p>
          <h2 className="text-4xl font-bold text-white mb-4">Vibe Trader × MarketGauge</h2>
          <p className="text-gray-400 mb-10">April 27, 2026</p>

          <p className="text-gray-300 leading-relaxed mb-10">
            An eight-slide working deck for the partnership conversation: the shape of the engagement,
            where Vibe Trader fits, three possible architectures for migrating MarketGauge&apos;s strategy
            framework off TradeStation, and a structure for investment, engineering, and customer relationship.
          </p>

          <button
            onClick={() => router.push("/presentation/1")}
            className="inline-block px-8 py-3 bg-white text-black font-semibold rounded-lg hover:bg-gray-200 transition-all duration-200"
          >
            Open Deck →
          </button>
        </div>
      </main>
    </div>
  );
}
