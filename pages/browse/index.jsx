import { useQuery } from '@tanstack/react-query';
import { Fragment } from 'react';
import { LoadingSpinner } from '../../components/LoadingSpinner.components';
import { getClothes } from '../../lib/clothesHelper';

const BrowsePage = () => {
  const { data, isLoading, isError, error } = useQuery(['clothes'], () =>
    getClothes()
  );

  if (isLoading) return <LoadingSpinner />;
  if (isError) return { error };

  return (
    <>
      <div className="w-5/6 grid grid-cols-2 mx-auto mt-8 gap-8">
        {data?.map((clothes) => (
          <Fragment key={data?._id}>
            <div className="flex flex-col w-full">
              <div className="bg-gray-300 h-36"></div>
              <div className="flex justify-center">{clothes.name}</div>
            </div>
          </Fragment>
        ))}
      </div>
    </>
  );
};

export default BrowsePage;
