import { signIn } from 'next-auth/react';

const LoginPage = () => {
  const handleGoogleSignin = async () => {
    signIn('google', {
      callbackUrl: process.env.NEXT_PUBLIC_NEXTAUTH_VERCEL_URL,
    });
  };

  return (
    <>
      <div className="flex justify-center mt-20">
        <button
          type="button"
          onClick={handleGoogleSignin}
          className="border px-4 py-2 border-black rounded-lg"
        >
          Sign In with Google
        </button>
      </div>
    </>
  );
};

export default LoginPage;

// Test
