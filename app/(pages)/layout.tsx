import Container from "@/components/Container";
import NavBar from "@/components/NavBar";
import React from "react";

const PagesLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <NavBar />
      <Container>
        <main className="">{children}</main>
      </Container>
    </div>
  );
};

export default PagesLayout;
