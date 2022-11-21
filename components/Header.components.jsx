import Link from 'next/link';
import { signOut, useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import Image from 'next/image';

export const Header = () => {
  const router = useRouter();
  const { data: session } = useSession();

  const handleSignout = async () => {
    await signOut();
    router.push('/');
  };

  return (
    <>
      <div className="flex flex-col bg-teal pt-16 items-center">
        <Link href="/">
          <Image
            src="https://i.imgur.com/NO3xCzW.png"
            width={214}
            height={30}
            alt="logo"
          />
        </Link>
        {session ? (
          <button onClick={handleSignout}>Logout</button>
        ) : (
          <>Logged Out</>
        )}
      </div>
    </>
  );
};
