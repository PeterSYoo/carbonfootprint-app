import { FcGoogle } from 'react-icons/fc';
import { signIn } from 'next-auth/react';

export default function Home() {
  const handleGoogleSignin = async () => {
    signIn('google', {
      callbackUrl: '/change-username',
    });
  };

  return (
    <>
      <div className="min-w-screen flex flex-col mt-8 mb-20">
        <div className="bg-gray-300 w-5/6 h-48 flex justify-center items-center mx-auto">
          Sustainable Clothing Rental Community
        </div>
        <div className="mt-10 bg-gray-300 w-5/6 h-[400px] mx-auto flex justify-center items-center">
          Hero Image
        </div>
        <div className="mt-10 mx-auto text-xl font-bold">
          Sign in with Google
        </div>
        <button
          type="button"
          onClick={handleGoogleSignin}
          className="mt-8 mx-auto bg-gray-300 px-6 py-2 rounded-xl"
        >
          <FcGoogle size={35} />
        </button>
      </div>
    </>
  );
}
