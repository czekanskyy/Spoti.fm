import React from 'react';
import Menu from './Menu';
import Search from './Search';

const Navbar = () => {
  return (
    <nav className='w-64 resize-x bg-gray-900 h-screen shadow-xl text-white flex flex-col items-center p-4 gap-4 flex-shrink-0'>
      <p className='text-3xl font-bold mb-2'>Spoti.fm</p>
      <Search />
      <Menu />
    </nav>
  );
};

export default Navbar;
