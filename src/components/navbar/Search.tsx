import React from 'react';

import { FaSearch } from 'react-icons/fa';

const Search = () => {
  return (
    <div className='bg-white/5 px-2 py-1 rounded-md border group border-white/10 hover:border-white/25 focus-within:border-white/25 active-within:border-white/25 flex items-center gap-x-2'>
      <input type='text' className='bg-transparent outline-none group placeholder:text-white/20 w-full text-sm' placeholder='Search' />
      <FaSearch className='text-white/20' />
    </div>
  );
};

export default Search;
