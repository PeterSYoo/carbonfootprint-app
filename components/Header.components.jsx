import React from 'react';
import { ThemeButton } from './ThemeButton.components';

export const Header = () => {
  return (
    <>
      <div className="flex justify-between mt-6 mx-auto px-10 md:max-w-[1024px]">
        <div className="text-xl font-bold">Logo</div>
        <div className="flex items-center gap-10">
          <ThemeButton />
          <button>Signin</button>
        </div>
      </div>
    </>
  );
};
