import { useEffect, useState } from 'react';
import { unstable_getServerSession } from 'next-auth';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import { useFormik } from 'formik';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { usernameValidate } from '../../lib/usernameValidate';
import { getUser, getUsers, updateUser } from '../../lib/usersHelper';
import { authOptions } from '../api/auth/[...nextauth]';
import { AiOutlineUser } from 'react-icons/ai';

const ChangeUsernamePage = () => {
  const [hydrated, setHydrated] = useState(false);

  const queryClient = useQueryClient();
  const { data: session } = useSession();
  const router = useRouter();

  const { data } = useQuery(['user'], () => getUser(session.id));

  const UpdateMutation = useMutation(
    (newData) => updateUser(session.id, newData),
    {
      onSuccess: async (data) => {
        queryClient.prefetchQuery(['user'], getUsers);
      },
    }
  );

  const onSubmit = (values) => {
    UpdateMutation.mutate(values);
    router.push('/browse');
  };

  const formik = useFormik({
    initialValues: {
      username: '',
    },
    validate: usernameValidate,
    onSubmit,
  });

  useEffect(() => {
    setHydrated(true);
  }, []);

  useEffect(() => {
    if (!session) {
      router.push('/');
    }
  }, []);

  if (!hydrated) {
    return null;
  } else {
    return (
      <>
        <form onSubmit={formik.handleSubmit}>
          <div className="flex flex-col">
            <div className="mt-20 flex justify-center text-2xl w-5/6 mx-auto">
              You are now signed in, choose your screen name!
            </div>
            <div
              className={`${
                formik.errors.username
                  ? 'flex w-5/6 mx-auto mt-10 pl-2 items-center rounded-md border border-red-400 py-3 hover:border-red-600 dark:border-red-500 hover:dark:border-red-600'
                  : 'flex w-5/6 mx-auto mt-10 pl-2 items-center rounded-md border border-gray-400 py-3 hover:border-black dark:border-gray-700 hover:dark:border-white'
              }`}
            >
              <AiOutlineUser size={20} />
              <input
                type="text"
                className="w-full px-3 focus:outline-none dark:bg-black placeholder:text-gray-500"
                placeholder={
                  data?.username ? `${data?.username}` : 'choose username'
                }
                {...formik.getFieldProps('username')}
                name="username"
                onChange={formik.handleChange}
                value={formik.values.username}
              />
            </div>
            <div className="w-5/6 mx-auto h-5">
              {formik.errors.username ? (
                <span className="text-[10px] text-red-500 md:text-[12px]">
                  {formik.errors.username}
                </span>
              ) : (
                <></>
              )}
            </div>
            <div className="w-5/6 mx-auto mt-10 flex justify-center">
              {formik.errors.username ? (
                <span className="rounded-lg border border-gray-400 bg-white px-4 py-1 font-bold text-gray-400 dark:border-gray-900 dark:bg-black dark:text-gray-700 ">
                  Confirm
                </span>
              ) : (
                <button
                  type="submit"
                  className="rounded-lg border border-white bg-black px-4 py-1 font-bold text-white hover:border-gray-300 hover:bg-white hover:text-black dark:bg-white dark:text-black dark:hover:border dark:hover:border-gray-700 dark:hover:bg-black dark:hover:text-white"
                >
                  Confirm
                </button>
              )}
            </div>
          </div>
        </form>
      </>
    );
  }
};

export default ChangeUsernamePage;

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
