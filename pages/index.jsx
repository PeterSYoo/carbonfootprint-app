import { FcGoogle } from 'react-icons/fc';
import { signIn, useSession } from 'next-auth/react';
import Image from 'next/image';

export default function Home() {
  const { data: session } = useSession();

  const handleGoogleSignin = async () => {
    signIn('google', {
      callbackUrl: '/change-username',
    });
  };

  return (
    <>
      <div className="min-w-screen flex flex-col mt-8 mb-20">
        <div className="w-3/4 flex text-center mx-auto">
          <h1 className="text-xl">Sustainable Clothing Rental Community</h1>
        </div>
        <div className="mt-10 bg-gray-300 w-full mx-auto flex justify-center items-center">
          <Image
            src="https://i.imgur.com/zv6jKia.png"
            width={430}
            height={257}
            alt="hero"
          />
        </div>
        {session ? (
          <></>
        ) : (
          <>
            <div className="flex flex-col w-1/2 mx-auto mt-10">
              <p className="font-bold text-sm">Sign in</p>
              <p className="mt-4 text-sm">Email</p>
              <input
                placeholder="email@email.com"
                type="text"
                readOnly={true}
                className="border border-black rounded-xl px-2"
              />
              <p className="mt-4 text-sm">Password</p>
              <input
                placeholder="**********"
                type="text"
                readOnly={true}
                className="border border-black rounded-xl px-2"
              />
              <button className="flex justify-center font-bold mt-4">
                Continue
              </button>
              <p className="underline mx-auto mt-4">Don't have an account?</p>
              <p className="underline mx-auto">Sign up here!</p>
            </div>
            <div className="mt-5 mx-auto text-lg font-bold">
              Sign in with Google
            </div>
            <button
              type="button"
              onClick={handleGoogleSignin}
              className="mx-auto px-6 py-2 rounded-xl"
            >
              <FcGoogle size={75} />
            </button>
          </>
        )}
      </div>
    </>
  );
}
