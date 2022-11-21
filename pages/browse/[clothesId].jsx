import { useQuery } from '@tanstack/react-query';
import { useFormik } from 'formik';
import Router from 'next/router';
import { LoadingSpinner } from '../../components/LoadingSpinner.components';
import { getClothe } from '../../lib/clothesHelper';
import { itemValidate } from '../../lib/itemValidate';

const ItemsIdPage = ({ clothesId }) => {
  const { data, isLoading, isError, error } = useQuery(['item'], () =>
    getClothe(clothesId)
  );

  const onSubmit = (values) => {
    console.log(values);
    Router.push('/offer-placed');
  };

  const formik = useFormik({
    initialValues: {
      checkoutDate: '',
      returnDate: '',
      message: '',
    },
    validate: itemValidate,
    onSubmit,
  });

  if (isLoading) return <LoadingSpinner />;
  if (isError) return error;

  return (
    <>
      <form onSubmit={formik.handleSubmit}>
        <div className="flex flex-col w-5/6 mx-auto">
          <img alt={data?.description} src={data?.photos[0]} className="mt-4 bg-gray-300 h-48" />
          
          <div className="flex justify-between mt-4">
            <div className="">{data?.name}</div>
            <div className="">Rent: ${data?.price}</div>
          </div>
          <div className="mt-2 flex gap-4">
            <span className="bg-gray-300 rounded-3xl px-2">{data?.size}</span>
            <span className="bg-gray-300 rounded-3xl px-2">{data?.color}</span>
            <span className="bg-gray-300 rounded-3xl px-2">
              {data?.occasion}
            </span>
          </div>
          <p className="text-xs mt-3">{data?.description}</p>
          <div className="mt-10 flex gap-5 w-full">
            <div className="flex flex-col w-1/2">
              <p className="text-sm font-bold">Checkout date</p>
              <input
                placeholder="MM/DD/YYYY"
                type="text"
                className={
                  formik.errors.checkoutDate
                    ? 'border border-red-600 w-full px-2 py-2 rounded-lg focus:outline-none'
                    : 'border border-black w-full px-2 py-2 rounded-lg focus:outline-none'
                }
                {...formik.getFieldProps('checkoutDate')}
                name="checkoutDate"
                onChange={formik.handleChange}
                value={formik.values.checkoutDate}
              />
              {formik.errors.checkoutDate ? (
                <span className="text-[10px] text-red-500 md:text-[12px]">
                  {formik.errors.checkoutDate}
                </span>
              ) : (
                <></>
              )}
            </div>
            <div className="flex flex-col w-1/2">
              <p className="text-sm font-bold">Return date</p>
              <input
                placeholder="MM/DD/YYYY"
                type="text"
                className={
                  formik.errors.returnDate
                    ? 'border border-red-600 w-full px-2 py-2 rounded-lg focus:outline-none'
                    : 'border border-black w-full px-2 py-2 rounded-lg focus:outline-none'
                }
                {...formik.getFieldProps('returnDate')}
                name="returnDate"
                onChange={formik.handleChange}
                value={formik.values.returnDate}
              />
              {formik.errors.returnDate ? (
                <span className="text-[10px] text-red-500 md:text-[12px]">
                  {formik.errors.returnDate}
                </span>
              ) : (
                <></>
              )}
            </div>
          </div>
          <div className="mt-4">
            <div className="flex flex-col">
              <p className="text-sm font-bold">Message to the owner</p>
              <textarea
                className={
                  formik.errors.message
                    ? 'border border-red-600 w-full px-2 py-2 rounded-lg focus:outline-none'
                    : 'border border-black w-full px-2 py-2 rounded-lg focus:outline-none'
                }
                {...formik.getFieldProps('message')}
                name="message"
                onChange={formik.handleChange}
                value={formik.values.message}
              />
              {formik.errors.message ? (
                <span className="text-[10px] text-red-500 md:text-[12px]">
                  {formik.errors.message}
                </span>
              ) : (
                <></>
              )}
            </div>
          </div>
          <div className="mt-4">
            {formik.errors.checkoutDate ||
            formik.errors.returnDate ||
            formik.errors.message ? (
              <span className="flex justify-center w-full border border-gray-300 text-gray-300 rounded-lg py-4 font-bold">
                Place offer
              </span>
            ) : (
              <button
                type="submit"
                className="w-full border border-black rounded-lg py-4 font-bold"
              >
                Place offer
              </button>
            )}
          </div>
        </div>
      </form>
    </>
  );
};

export default ItemsIdPage;

export const getServerSideProps = async (context) => {
  const { clothesId } = context.query;

  if (!clothesId) {
    return {
      redirect: {
        permanent: false,
        destination: '/browse',
      },
    };
  }

  return {
    props: { clothesId },
  };
};
