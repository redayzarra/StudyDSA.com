import Container from "@/components/Container";
import NavBar from "@/components/NavBar";
import TableOfContents from "@/components/TableOfContents";
import Head from "next/head";
import React from "react";

const DataStructuresLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Head>
        <link
          href="//cdnjs.cloudflare.com/ajax/libs/KaTeX/0.9.0/katex.min.css"
          rel="stylesheet"
        />
      </Head>
      <div className="w-full h-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-background to-muted-foreground/25 dark:from-accent dark:to-background">
        <NavBar />
        <Container>
          <div className="mt-16 grid grid-cols-1 md:grid-cols-[auto_1fr]">
            <TableOfContents />
            {children}
          </div>
        </Container>
      </div>
    </>
  );
};

export default DataStructuresLayout;
