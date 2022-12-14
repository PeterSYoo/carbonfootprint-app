import { getSession } from 'next-auth/react';
import Link from 'next/link';

const OfferPlacedPage = () => {
  return (
    <>
      <div className="w-5/6 mt-20 flex flex-col mx-auto">
        <h1 className="text-3xl font-bold text-center">
          Your offer has been placed!
        </h1>
        <div className="flex justify-between mt-20">
          <Link href="/browse">
            <button className="bg-gray-300 py-4 px-2">Back to browsing</button>
          </Link>
          <Link href="/">
            <button className="bg-gray-300 py-4 px-2 text-gray-400">
              Go to messages
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default OfferPlacedPage;

export async function getServerSideProps(context) {
  const session = await getSession(context);

  if (!session) {
    return {
      redirect: {
        permanent: false,
        destination: '/',
      },
    };
  }

  return { props: { session } };
}
