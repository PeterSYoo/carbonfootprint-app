import { useEffect, useState } from 'react';
import { unstable_getServerSession } from 'next-auth';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import { useFormik } from 'formik';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { usernameValidate } from '../../lib/usernameValidate';
import { getUser, getUsers, updateUser } from '../../lib/usersHelper';
import { authOptions } from '../api/auth/[...nextauth]';

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
    if (data?.username) {
      router.push('/browse');
    }
  }, [data?.username]);

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
            <div className="mt-20 flex justify-center text-xl w-5/6 mx-auto text-center font-bold">
              You are now signed in.
              <br />
              Now choose your screen name!
            </div>
            <p className="w-1/2 mx-auto mt-16 font-bold text-sm">Screen Name</p>
            <div
              className={`${
                formik.errors.username
                  ? 'flex w-1/2 mx-auto mt-2 pl-1 items-center rounded-md border border-red-400 py-1 hover:border-red-600 dark:border-red-500 hover:dark:border-red-600'
                  : 'flex w-1/2 mx-auto mt-2 pl-1 items-center rounded-md border border-gray-400 py-1 hover:border-black dark:border-gray-700 hover:dark:border-white'
              }`}
            >
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
            <div className="w-1/2 mx-auto h-5">
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
                  className="rounded-lg border border-black bg-teal px-10 py-4 font-bold text-white hover:border-gray-300 hover:bg-black hover:text-white"
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
