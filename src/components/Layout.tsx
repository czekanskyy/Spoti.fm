import React from 'react';
import Navbar from './navbar/Navbar';

interface Props {
  children: React.ReactNode;
}

const Layout = ({ children }: Props) => {
  return (
    <div className='min-h-screen flex'>
      <Navbar />
      <main>{children}</main>
    </div>
  );
};

export default Layout;
