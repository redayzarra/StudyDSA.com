import React from "react";
import Logo from "./Logo";
import TableOfContents from "./TableOfContents";

const SideBar = () => {
  return (
    <div className="h-full border-r flex flex-col overflow-y-auto bg-background shadow-sm">
      <div className="absolute left-1/2 transform -translate-x-1/2 mt-4">
        <Logo />
      </div>
    </div>
  );
};

export default SideBar;
