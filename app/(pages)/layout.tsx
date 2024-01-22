import Container from "@/components/Container";
import NavBar from "@/components/NavBar";
import React from "react";

const PagesLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="w-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-background to-muted-foreground/25 dark:from-accent dark:to-background">
      <NavBar />
      <Container>
        <main className="mt-16">{children}</main>
      </Container>
    </div>
  );
};

export default PagesLayout;
