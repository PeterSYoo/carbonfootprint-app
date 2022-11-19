import { useQuery } from '@tanstack/react-query';
import { useFormik } from 'formik';
import Router, { useRouter } from 'next/router';
import { useEffect } from 'react';
import { getClothe } from '../../lib/clothesHelper';

const ItemsIdPage = ({ clothesId }) => {
  const { data } = useQuery(['item'], () => getClothe(clothesId));

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
    onSubmit,
  });

  return (
    <>
      <form onSubmit={formik.handleSubmit}>
        <div className="flex flex-col w-5/6 mx-auto">
          <div className="mt-4 bg-gray-300 h-48 flex justify-center items-center">
            Image of item
          </div>
          <div className="flex justify-between mt-4">
            <div className="">{data?.name}</div>
            <div className="">Rent: ${data?.price}</div>
          </div>
          <div className="mt-4">
            <div className="">Size: {data?.size}</div>
            <div className="">Color: {data?.color}</div>
            <div className="">Description: {data?.description}</div>
            <div className="">Brand:</div>
          </div>
          <div className="mt-10 flex gap-5">
            <input
              placeholder="Checkout date"
              type="text"
              className="border border-black w-1/2 px-2"
              {...formik.getFieldProps('checkoutDate')}
              name="checkoutDate"
              onChange={formik.handleChange}
              value={formik.values.checkoutDate}
            />
            <input
              placeholder="Return date"
              type="text"
              className="border border-black w-1/2 px-2"
              {...formik.getFieldProps('returnDate')}
              name="returnDate"
              onChange={formik.handleChange}
              value={formik.values.returnDate}
            />
          </div>
          <div className="mt-4">
            <textarea
              placeholder="Message to the owner"
              className="border border-black w-full p-2"
              {...formik.getFieldProps('message')}
              name="message"
              onChange={formik.handleChange}
              value={formik.values.message}
            />
          </div>
          <div className="mt-4">
            <button type="submit" className="w-full bg-gray-300 py-4">
              Place offer
            </button>
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
