import Link from "next/link";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-gray-900 via-black to-gray-900">
      <div className="max-w-4xl mx-auto px-6 py-12 text-center">
        <div className="mb-12">
          <h1 className="text-6xl font-bold text-white mb-4 bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
            Vibe Trader
          </h1>
          <p className="text-xl text-gray-300 mb-8">
            The Next Generation Trading Platform
          </p>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Experience the future of trading with our innovative platform. 
            Request access to view our exclusive pitch deck presentation.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link
            href="/waitlist"
            className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-200 shadow-lg hover:shadow-xl"
          >
            Request Access
          </Link>
          
          <Link
            href="/sign-in"
            className="px-8 py-4 bg-gray-800 text-white font-semibold rounded-lg hover:bg-gray-700 transition-all duration-200 border border-gray-700"
          >
            Sign In
          </Link>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-6 border border-gray-700">
            <div className="text-3xl mb-3">🚀</div>
            <h3 className="text-xl font-semibold text-white mb-2">Innovative</h3>
            <p className="text-gray-400">Cutting-edge trading technology at your fingertips</p>
          </div>
          
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-6 border border-gray-700">
            <div className="text-3xl mb-3">🔒</div>
            <h3 className="text-xl font-semibold text-white mb-2">Secure</h3>
            <p className="text-gray-400">Enterprise-grade security for your investments</p>
          </div>
          
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-6 border border-gray-700">
            <div className="text-3xl mb-3">📊</div>
            <h3 className="text-xl font-semibold text-white mb-2">Data-Driven</h3>
            <p className="text-gray-400">Advanced analytics powered by AI</p>
          </div>
        </div>
      </div>
    </div>
  );
}