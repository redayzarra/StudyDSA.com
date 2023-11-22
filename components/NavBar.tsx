import React from "react";
import { ModeToggle } from "./ModeToggle";
import { FaBook } from "react-icons/fa6";
import Link from "next/link";

const NavBar = () => {
  return (
    <div className="px-4 py-3 h-full border-b shadow-sm flex items-center bg-background justify-between">
      <Link href={"/"}>
        <div className="space-x-1 flex items-center">
          <FaBook size={25} />
          <h1 className="text-2xl font-black">StudyDSA</h1>
        </div>
      </Link>
      <ModeToggle />
    </div>
  );
};

export default NavBar;
