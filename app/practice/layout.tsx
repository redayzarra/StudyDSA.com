import NavBar from "@/components/NavBar";
import TableOfProblems from "@/components/TableOfProblems";
import { Metadata } from "next";
import { Poppins } from "next/font/google";
import React from "react";

const font = Poppins({
  subsets: ["latin"],
  weight: ["700"],
});

const PracticeLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex w-full relative bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-background via-muted-foreground/10 to-muted-foreground/[0.22] dark:bg-neutral-950/[0.96] dark:bg-dot-white/[0.05]">
      <NavBar />
      <div className="container pt-16 flex-1 items-start grid grid-cols-1 lg:grid-cols-[240px_minmax(0,1fr)] gap-10">
        <aside className="fixed top-[84px] z-3 -ml-2 hidden h-[92vh] w-full shrink-0 lg:sticky lg:block">
          <TableOfProblems />
        </aside>
        <div className="pt-10 max-w-4xl mb-[120px]">{children}</div>
      </div>
    </div>
  );
};


export const metadata: Metadata = {
  title: {
    template: "%s",
    default: "Practice",
  },
  description:
    "Enhance your coding skills with our curated problem sets. Practice data structures and algorithms through interactive challenges designed for all skill levels.",
};

export default PracticeLayout;
