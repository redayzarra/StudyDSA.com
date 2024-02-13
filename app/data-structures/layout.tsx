import Container from "@/components/Container";
import NavBar from "@/components/NavBar";
import TableOfContents from "@/components/TableOfContents";
import React from "react";

const DataStructuresLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="">
      <NavBar />
      <Container>
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          <TableOfContents />
          {children}
        </div>
      </Container>
    </div>
  );
};

export default DataStructuresLayout;
