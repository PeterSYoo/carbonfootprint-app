import { useEffect, useState } from 'react';
import {clothe}
import Router from 'next/router';
import { NewItemComponent } from '../../components/NewItemComponent.component';
import { getSession } from 'next-auth/react';
import { unstable_getServerSession } from 'next-auth';
import { authOptions } from '../api/auth/[...nextauth]';
import { QueryClient, useQuery } from '@tanstack/react-query';
import { getUser, getUsers } from '../../lib/usersHelper';
import { LoadingSpinner } from '../../components/LoadingSpinner.components';

export default function Upload({ session }) {
  const [fileInputState, setFileInputState] = useState('');
  const [previewSource, setPreviewSource] = useState('');
  const [selectedFile, setSelectedFile] = useState('');
  const [newItem, setNewItem] = useState({
    user: '',
    color: '',
    size: '',
    occasion: '',
    photos: [],
    article: '',
    available: true,
    price: '',
    description: '',
    name: '',
  });

  const { data, isLoading, isError, error } = useQuery(['user'], () =>
    getUser(session.id)
  );

  if (isLoading) return <LoadingSpinner />;
  if (isError) {
    return <>Error {error.message}</>;
  }


  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log(session.id)
    setNewItem((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  const newItempAPIcall = async () => {
    try {
      const data = new FormData();
      data.append('file', selectedFile);
      data.append('upload_preset', 'eco-app');

      const imageUpload = await fetch(
        'https://api.cloudinary.com/v1_1/dkmbw4f6d/image/upload',
        {
          method: 'POST',
          body: data,
        }
      );
      const parsedImg = await imageUpload.json();
      newItem.photos = [parsedImg.url];
      newItem.user = session.id;
      const request = await fetch(`https://carbonfootprint-app.vercel.app`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newItem),
      });
      const res = await request.json();
      console.log(newItem, res);
      if (res.status !== 404) {
        setFileInputState('');
        setPreviewSource('');
        setNewItem({
          user: '',
          color: '',
          size: '',
          occasion: '',
          photos: [],
          article: '',
          available: true,
          price: '',
          description: '',
          name: '',
          brand: '',
        });
        Router.push('/profile');
      }
      console.log(res, '');
    } catch (error) {
      console.log(error);
    }
  };

  const handleFileInputChange = (e) => {
    const file = e.target.files[0];
    previewFile(file);
    setSelectedFile(file);
    setFileInputState(e.target.value);
  };

  const previewFile = (file) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setPreviewSource(reader.result);
    };
  };

  const handleSubmitFile = (e) => {
    e.preventDefault();
    if (!selectedFile) return;
    const reader = new FileReader();
    reader.readAsDataURL(selectedFile);
    reader.onloadend = () => {};

    newItempAPIcall();

    reader.onerror = () => {
      console.error('error');
    };
  };

  return (
    <div className="flex flex-col w-5/6 mx-auto">
      {!!previewSource ? (
        <img
          src={previewSource}
          alt="chosen"
          className=" bg-gray-300 w-80 h-80 my-8 mx-auto "
        />
      ) : (
        <div className="bg-gray-300 w-80 h-80  my-8 mx-auto"></div>
      )}
      <NewItemComponent
        handleChange={handleChange}
        handleSubmitFile={handleSubmitFile}
        handleFileInputChange={handleFileInputChange}
        fileInputState={fileInputState}
        newItem={newItem}
      />
    </div>
  );
}

export const getServerSideProps = async (context) => {
  const session = await getSession(context);

  if (!session) {
    return {
      redirect: {
        permanent: false,
        destination: '/',
      },
    };
  }

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
