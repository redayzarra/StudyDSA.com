import Container from "@/components/Container";
import NavBar from "@/components/NavBar";
import TableOfContents from "@/components/TableOfContents";
import React from "react";

const AlgorithmsLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="w-full h-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-background to-muted-foreground/25 dark:from-accent dark:to-background">
      <NavBar />
      <Container>
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2">
          <TableOfContents />
          {children}
        </div>
      </Container>
    </div>
  );
};

export default AlgorithmsLayout;
