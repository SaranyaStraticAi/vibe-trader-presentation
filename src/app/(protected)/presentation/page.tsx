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
        <h1 className="text-2xl font-bold text-white">Vibe Trader Pitch Deck</h1>
        <div className="flex items-center gap-4">
          <span className="text-gray-400">Welcome, {user.firstName || user.emailAddresses[0].emailAddress}</span>
          <UserButton afterSignOutUrl="/" />
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-6 py-12">
        <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-8 border border-gray-700">
          <h2 className="text-3xl font-bold text-white mb-6">Vibe Trader Investment Opportunity</h2>
          
          <div className="space-y-8">
            <section>
              <h3 className="text-xl font-semibold text-blue-400 mb-4">Executive Summary</h3>
              <p className="text-gray-300 leading-relaxed">
                Vibe Trader is revolutionizing the trading industry with our AI-powered sentiment analysis platform. 
                We analyze social media trends, news sentiment, and market vibes to provide predictive trading signals.
              </p>
            </section>

            <section>
              <h3 className="text-xl font-semibold text-blue-400 mb-4">Market Opportunity</h3>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-start">
                  <span className="text-green-400 mr-2">•</span>
                  $95 trillion global stock market capitalization
                </li>
                <li className="flex items-start">
                  <span className="text-green-400 mr-2">•</span>
                  15% annual growth in algorithmic trading
                </li>
                <li className="flex items-start">
                  <span className="text-green-400 mr-2">•</span>
                  $500B retail trading market
                </li>
              </ul>
            </section>

            <section>
              <h3 className="text-xl font-semibold text-blue-400 mb-4">Our Solution</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-gray-900/50 p-4 rounded-lg">
                  <h4 className="text-white font-semibold mb-2">Sentiment Analysis Engine</h4>
                  <p className="text-gray-400 text-sm">Real-time processing of social media and news data</p>
                </div>
                <div className="bg-gray-900/50 p-4 rounded-lg">
                  <h4 className="text-white font-semibold mb-2">Predictive AI Models</h4>
                  <p className="text-gray-400 text-sm">Machine learning algorithms trained on historical data</p>
                </div>
                <div className="bg-gray-900/50 p-4 rounded-lg">
                  <h4 className="text-white font-semibold mb-2">Automated Trading</h4>
                  <p className="text-gray-400 text-sm">Execute trades based on sentiment signals</p>
                </div>
                <div className="bg-gray-900/50 p-4 rounded-lg">
                  <h4 className="text-white font-semibold mb-2">Risk Management</h4>
                  <p className="text-gray-400 text-sm">Advanced portfolio optimization and risk controls</p>
                </div>
              </div>
            </section>

            <section>
              <h3 className="text-xl font-semibold text-blue-400 mb-4">Traction</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="text-center">
                  <div className="text-3xl font-bold text-white">10,000+</div>
                  <div className="text-gray-400">Active Users</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-white">$50M+</div>
                  <div className="text-gray-400">Trading Volume</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-white">85%</div>
                  <div className="text-gray-400">Win Rate</div>
                </div>
              </div>
            </section>

            <section>
              <h3 className="text-xl font-semibold text-blue-400 mb-4">Investment Ask</h3>
              <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 p-6 rounded-lg border border-blue-500/30">
                <div className="text-2xl font-bold text-white mb-2">Raising $5M Series A</div>
                <p className="text-gray-300 mb-4">20% equity • $25M post-money valuation</p>
                <div className="space-y-2 text-gray-300">
                  <div>• 40% - Technology Development & AI Research</div>
                  <div>• 30% - Marketing & User Acquisition</div>
                  <div>• 20% - Operations & Infrastructure</div>
                  <div>• 10% - Regulatory & Compliance</div>
                </div>
              </div>
            </section>

            <section className="text-center pt-8">
              <h3 className="text-2xl font-bold text-white mb-4">Let's Build the Future of Trading Together</h3>
              <p className="text-gray-400 mb-6">Contact us to discuss investment opportunities</p>
              <a 
                href="mailto:invest@vibetrader.com"
                className="inline-block px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-200"
              >
                Get In Touch
              </a>
            </section>
          </div>
        </div>
      </main>
    </div>
  );
}