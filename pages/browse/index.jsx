import { useQuery } from '@tanstack/react-query';
import Link from 'next/link';
import { Fragment, useState, useEffect } from 'react';
import { LoadingSpinner } from '../../components/LoadingSpinner.components';
import { getClothes } from '../../lib/clothesHelper';
import { getSession } from 'next-auth/react';
import { SearchMenu } from '../../components/SearchMenu.component';


const BrowsePage = () => {
  const { data, isLoading, isError, error } = useQuery(['clothes'], () =>
    getClothes()
  );

  const [foundItems, setFoundItems] = useState([]);
  const [showSearch, setShowSearch] = useState(false);
  const [searchBy, setSearchBy] = useState('name');
  const [showModal, setShowModal] = useState(false)


  useEffect(() => {
    setFoundItems(data);
  }, [data]);

  const searchByPrice = (price) => {
    if (price < 99){
      const found = data.filter((item) => {(item.price <= price ) })
      setFoundItems(found);
    }else{
      setFoundItems(data)
    }
  }
  const searchFunction = (prop, str) => {
    const found = data.filter((item) =>
      item[prop].toUpperCase().includes(str.toUpperCase())
    );
    setFoundItems(found);
  };

  let handleSearch = (prop, val) => {
    if (val === '' || !prop) {
      setFoundItems(data)
      return;
    } else {
      setShowSearch(true);
    }
    searchFunction(prop, val);
  };

  if (isLoading) return <LoadingSpinner />;
  if (isError) return { error };

  return (
    <>
      <div className="w-5/6 grid grid-cols-2 mx-auto mt-12 gap-5 mb-48">
        {foundItems?.map((clothes) => (
          <Fragment key={clothes._id}>
            <div className="flex flex-col w-full">
              <Link href={`/browse/${clothes._id}`}>
                <img
                src={clothes.photos[0]}
                alt={clothes.description}
                className="bg-gray-300 h-36 rounded-xl"
                />
                <div className="flex justify-center">{clothes.name}</div>
              </Link>
            </div>
          </Fragment>
        ))}
      </div>
      <SearchMenu
        searchByPrice={searchByPrice}
        searchBy={searchBy}
        handleSearch={handleSearch}
        setShowModal={setShowModal}
        showModal={showModal}
        />
    </>
  );
};

export default BrowsePage;

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
