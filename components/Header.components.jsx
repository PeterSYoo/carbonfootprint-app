import { useSession, signOut } from 'next-auth/react';
import Link from 'next/link';
import React from 'react';
import { ThemeButton } from './ThemeButton.components';

export const Header = () => {
  return (
    <>
      <div className="flex flex-col bg-gray-300 pt-16 items-center">
        <div className="mb-2">
          <ThemeButton />
        </div>
        <Link href="/">
          <h1 className="text-3xl font-bold mb-3">Our Closet</h1>
        </Link>
        <button onClick={() => signOut()}>Logout</button>
      </div>
    </>
  );
};
