import { useSession } from 'next-auth/react';

const Guest = () => {
  return (
    <>
      <div className="min-w-screen flex justify-center mt-10">Please Login</div>
    </>
  );
};

const User = ({ session }) => {
  return (
    <>
      <div className="min-w-screen flex justify-center mt-10">Welcome</div>
    </>
  );
};

export default function Home() {
  const { data: session } = useSession();

  return <>{session ? User({ session }) : Guest()}</>;
}
