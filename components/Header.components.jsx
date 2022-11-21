import Link from 'next/link';
import Image from 'next/image';

export const Header = () => {
  return (
    <>
      <div className="flex flex-col bg-teal pt-16 items-center pb-5">
        <Link href="/">
          <Image
            src="https://i.imgur.com/NO3xCzW.png"
            width={214}
            height={30}
            alt="logo"
          />
        </Link>
      </div>
    </>
  );
};
