import Link from 'next/link';
import { signOut, useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import { ThemeButton } from './ThemeButton.components';

export const Header = () => {
  const router = useRouter();
  const { data: session } = useSession();

  const handleSignout = async () => {
    await signOut();
    router.push('/');
  };

  return (
    <>
      <div className="flex flex-col bg-gray-300 pt-16 items-center">
        <div className="mb-2">
          <ThemeButton />
        </div>
        <Link href="/">
          <h1 className="text-3xl font-bold mb-3">Our Closet</h1>
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
