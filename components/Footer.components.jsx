import { FiLogOut } from 'react-icons/fi';
import { BsChatDots, BsSearch, BsPlusCircle } from 'react-icons/bs';
import { FiUser } from 'react-icons/fi';
import { signOut, useSession } from 'next-auth/react';
import Link from 'next/link';
import { useRouter } from 'next/router';

const Guest = () => {
  return <></>;
};

const User = (handleSignout) => {
  return (
    <>
      <div className="fixed z-20 inset-x-0 bottom-0">
        <div className="flex justify-between w-full bg-teal px-10 py-4 text-white">
          <Link href="/profile">
            <FiUser size={28} />
          </Link>
          <BsChatDots size={28} className="opacity-30" />
          <Link href="/browse">
            <BsSearch size={28} />
          </Link>
          <button onClick={() => handleSignout()}>
            <FiLogOut size={28} />
          </button>
        </div>
      </div>
    </>
  );
};

export const Footer = () => {
  const router = useRouter();
  const { data: session } = useSession();

  const handleSignout = async () => {
    await signOut();
    router.push('/');
  };

  return <>{session ? User(handleSignout) : Guest()}</>;
};
