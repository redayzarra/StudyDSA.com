import Container from '@/components/Container';
import NavBar from '@/components/NavBar';
import React from 'react';

const DataStructuresLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="">
      <NavBar />
      <Container>
        <main className="mt-16">{children}</main>
      </Container>
    </div>
  );
};

export default DataStructuresLayout;