import React from 'react';
import Navbar from '@/components/Navbar';

type Props = {
  children: React.ReactNode;
}

const HomeLayout = ({ children }: Props) => {
  return (
    <div>
      {/* TODO: build navbar here */}
      <Navbar/>

      {/* Content (page.tsx) goes from here */}
      <div>{children}</div>

      {/* TODO: build footer here */}
      <div>Footer</div>
    </div>
  );
}

export default HomeLayout;