import NavBar from "@/components/NavBar";
import React from "react";
import { FaBook } from "react-icons/fa6";

const PracticePage = () => {
  return (
    <div className="flex w-full relative bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-background via-muted-foreground/10 to-muted-foreground/[0.22] dark:bg-neutral-950/[0.96] dark:bg-dot-white/[0.05]">
      <NavBar />
      <div className="container mt-16 flex-1 items-start bg-black md:grid md:grid-cols-[220px_minmax(0,1fr)] md:gap-6 lg:grid-cols-[240px_minmax(0,1fr)] gap-10">
        <FaBook size={300} className="m-48" />
      </div>
    </div>
  );
};

export default PracticePage;
