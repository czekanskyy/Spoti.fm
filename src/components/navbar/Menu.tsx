import React from 'react';
import MenuLink from './MenuLink';

import { HomeIcon, MusicalNoteIcon, MicrophoneIcon, HeartIcon, PlusIcon } from '@heroicons/react/24/outline';

// Temp
import { playlists } from '../../../data/playlists';
import { Link } from 'react-router-dom';

const Menu = () => {
  return (
    <div className='flex flex-col gap-y-2 w-full'>
      {/* Navigation links */}
      <MenuLink path='/' icon={<HomeIcon className='w-5' />} label='Home' />
      <MenuLink path='/music' icon={<MusicalNoteIcon className='w-5' />} label='Music Library' />
      <MenuLink path='/podcasts' icon={<MicrophoneIcon className='w-5' />} label='Podcasts Library' />
      <MenuLink path='/liked' icon={<HeartIcon className='w-5' />} label='Liked Songs' />
      <button className='flex items-center gap-x-3 justify-start px-2 py-1.5 font-light w-full rounded-md relative hover:bg-white/10'>
        <div className='bg-white text-black p-0.5 rounded'>
          <PlusIcon className='w-4' />
        </div>
        <span className='text-base'>Create Playlist</span>
      </button>

      <hr className='border-white/10 my-2' />

      {/* Playlists */}
      {playlists.map(playlist => (
        <Link to='/' key={playlist.id} className='text-sm text-gray-400 font-medium'>
          {playlist.name}
        </Link>
      ))}
    </div>
  );
};

export default Menu;
