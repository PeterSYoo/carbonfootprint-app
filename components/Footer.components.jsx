import { RiSettings5Line } from 'react-icons/ri';
import { BsChatDots, BsSearch, BsPlusCircle } from 'react-icons/bs';
import { FiUser } from 'react-icons/fi';
import { useSession } from 'next-auth/react';
import Link from 'next/link';

const Guest = () => {
  return <></>;
};

const User = () => {
  return (
    <>
      <div className="fixed inset-x-0 bottom-0">
        <div className="flex justify-between w-full bg-teal px-10 py-4 text-white">
          <BsPlusCircle size={28} />
          <BsChatDots size={28} className="opacity-30" />
          <Link href="/browse">
            <BsSearch size={28} />
          </Link>
          <Link href="/profile">
            <FiUser size={28} />
          </Link>
        </div>
      </div>
    </>
  );
};

export const Footer = () => {
  const { data: session } = useSession();

  return <>{session ? User() : Guest()}</>;
};
