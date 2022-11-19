import { RiSettings5Line } from 'react-icons/ri';
import { BsChatDots, BsSearch } from 'react-icons/bs';
import { FiUser } from 'react-icons/fi';
import { useSession } from 'next-auth/react';

const Guest = () => {
  return <></>;
};

const User = () => {
  return (
    <>
      <div className="fixed inset-x-0 bottom-0">
        <div className="flex justify-between w-full bg-gray-300 px-10 py-4">
          <RiSettings5Line size={28} />
          <BsChatDots size={28} />
          <BsSearch size={28} />
          <FiUser size={28} />
        </div>
      </div>
    </>
  );
};

export const Footer = () => {
  const { data: session } = useSession();

  return <>{session ? User() : Guest()}</>;
};
