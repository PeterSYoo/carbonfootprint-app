import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { unstable_getServerSession } from 'next-auth';
import { useSession } from 'next-auth/react';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { Fragment, useEffect, useState } from 'react';
import { LoadingSpinner } from '../../components/LoadingSpinner.components';
import { deleteClothe } from '../../lib/clothesHelper';
import { getUserClothes } from '../../lib/userClothesHelper';
import { getUser } from '../../lib/usersHelper';
import { authOptions } from '../api/auth/[...nextauth]';

const ProfilePage = () => {
  const [hydrated, setHydrated] = useState(false);
  const router = useRouter();

  const queryClient = useQueryClient();
  const { data: session } = useSession();

  const { data, isLoading, isError, error } = useQuery(['user'], () =>
    getUser(session.id)
  );

  const { data: userItems } = useQuery(['userClothes'], () =>
    getUserClothes(session.id)
  );

  const { mutateAsync, isLoading: isLoadingDelete } = useMutation(deleteClothe);

  const handleDelete = async (id) => {
    await mutateAsync(id);
    queryClient.invalidateQueries(['userClothes']);
  };

  useEffect(() => {
    if (!session) {
      router.push('/');
    }
  });

  useEffect(() => {
    setHydrated(true);
  }, []);

  if (isLoading) return <LoadingSpinner />;
  if (isError) return 'error';

  if (!hydrated) {
    return null;
  } else {
    return (
      <>
        <div className="w-5/6 flex flex-col mx-auto mb-36">
          <div className="flex justify-center mt-10">
            <Image
              src={data.image}
              width="150"
              height="150"
              alt="profile image"
              className="rounded-[100px]"
            />
          </div>
          <div className="mt-10 flex flex-col mx-auto">
            <h1 className="text-3xl font-bold text-center">@{data.username}</h1>
            <p className="text-sm mt-2 text-center">Your Closet</p>
          </div>
          <div className="grid grid-cols-2 mt-10 gap-4">
            {userItems?.map((item) => (
              <Fragment key={item._id}>
                <div className="flex flex-col">
                  <div className="bg-gray-300 h-36 flex justify-center items-center">
                    {item.name}
                  </div>
                  <button
                    onClick={() => handleDelete(item._id)}
                    className="border border-black p-2 mb-4"
                  >
                    {isLoadingDelete ? 'Loading...' : 'Delete'}
                  </button>
                </div>
              </Fragment>
            ))}
            <div className="flex flex-col">
              <div className="bg-gray-300 h-36 flex justify-center items-center text-3xl">
                +
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
};

export default ProfilePage;

export const getServerSideProps = async (context) => {
  return {
    props: {
      session: await unstable_getServerSession(
        context.req,
        context.res,
        authOptions
      ),
    },
  };
};
