import Link from "next/link";
import React from "react";
import { FaBook } from "react-icons/fa6";

const Logo = () => {
  return (
    <Link href={"/"}>
      <div className="gap-x-1 flex items-center">
        <FaBook size={25} />
        <h1 className="text-2xl font-black">StudyDSA</h1>
      </div>
    </Link>
  );
};

export default Logo;
