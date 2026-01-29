import { SignUp } from "@clerk/nextjs";

export default function SignUpPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-gray-900 to-black">
      <SignUp 
        forceRedirectUrl="/presentation/1"
        signInUrl="/sign-in"
        appearance={{
          elements: {
            rootBox: "mx-auto",
            card: "bg-gray-900/90 backdrop-blur-sm border-gray-800",
          },
        }}
      />
    </div>
  );
}