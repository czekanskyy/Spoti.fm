import React from 'react';
import { Link, useLocation } from 'react-router-dom';

interface Props {
  icon: React.ReactNode;
  label: string;
  path: string;
}

const MenuLink = ({ icon, label, path }: Props) => {
  const { pathname } = useLocation();

  return (
    <Link
      to={path}
      className={`flex items-center gap-x-3 justify-start px-2 py-1.5 font-light w-full rounded-md relative hover:bg-white/10 ${
        pathname === path &&
        'bg-white/10 before:content-["*"] before:h-4 before:w-0.5 before:bg-orange-400 before:text-transparent before:rounded-xl before:absolute before:-left-px'
      }`}
    >
      {icon}
      <span className='text-base'>{label}</span>
    </Link>
  );
};

export default MenuLink;
