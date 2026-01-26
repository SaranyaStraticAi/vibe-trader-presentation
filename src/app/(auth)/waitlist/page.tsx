import { Waitlist } from "@clerk/nextjs";

export default function WaitlistPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-gray-900 to-black">
      <div className="max-w-md w-full px-4">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-white mb-2">
            Request Access to Vibe Trader
          </h1>
          <p className="text-gray-400">
            Join our exclusive waitlist to get early access to the Vibe Trader presentation.
          </p>
        </div>
        
        <Waitlist 
          appearance={{
            elements: {
              rootBox: "mx-auto",
              card: "bg-gray-900/90 backdrop-blur-sm border-gray-800",
              headerTitle: "text-white",
              headerSubtitle: "text-gray-400",
              formButtonPrimary: "bg-blue-600 hover:bg-blue-700",
            },
          }}
        />
        
        <div className="mt-8 text-center">
          <p className="text-sm text-gray-500">
            Already have access?{" "}
            <a href="/sign-in" className="text-blue-500 hover:text-blue-400 underline">
              Sign in
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}