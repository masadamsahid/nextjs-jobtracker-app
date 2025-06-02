import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Testimonial from '@/components/Testimonial';

type Props = {
  children: React.ReactNode;
}

const HomeLayout = ({ children }: Props) => {
  return (
    <div>
      {/* TODO: build navbar here */}
      <Navbar/>

      {/* Content (page.tsx) goes from here */}
      {/* <Testimonial/> */}
      <div>{children}</div>

      {/* TODO: build footer here */}
      <Footer/>
    </div>
  );
}

export default HomeLayout;