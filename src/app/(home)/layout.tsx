import React from 'react';

type Props = {
  children: React.ReactNode;
}

const HomeLayout = ({ children }: Props) => {
  return (
    <div>
      {/* TODO: build navbar here */}
      <div>Navbar</div>

      {/* Content (page.tsx) goes from here */}
      <div>{children}</div>

      {/* TODO: build footer here */}
      <div>Footer</div>
    </div>
  );
}

export default HomeLayout;