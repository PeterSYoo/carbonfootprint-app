import { useSession, signOut } from 'next-auth/react';
import Link from 'next/link';
import React from 'react';
import { ThemeButton } from './ThemeButton.components';

const Guest = () => {
  return (
    <>
      <div className="flex justify-between mt-6 mx-auto px-10 md:max-w-[1024px]">
        <Link href="/">
          <button className="text-xl font-bold">Logo</button>
        </Link>
        <div className="flex items-center gap-10">
          <ThemeButton />
          <Link href="/login">
            <button>Login</button>
          </Link>
        </div>
      </div>
    </>
  );
};

const User = () => {
  return (
    <>
      <div className="flex justify-between mt-6 mx-auto px-10 md:max-w-[1024px]">
        <Link href="/">
          <button className="text-xl font-bold">Logo</button>
        </Link>
        <div className="flex items-center gap-10">
          <ThemeButton />
          <button onClick={() => signOut()}>Logout</button>
        </div>
      </div>
    </>
  );
};

export const Header = () => {
  const { data: session } = useSession();

  return <>{session ? User({ session }) : Guest()}</>;
};
