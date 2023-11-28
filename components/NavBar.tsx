import Link from "next/link";
import { FaBook } from "react-icons/fa6";
import { ModeToggle } from "./ModeToggle";
import { NavMenuItems } from "./NavMenuItems";
import { Button } from "./ui/button";
import MobileSideBar from "./MobileSideBar";
import LogInButton from "./LogInButton";
import Logo from "./Logo";

const NavBar = () => {
  return (
    <div className="shadow-md border-b fixed top-0 left-0 right-0 z-50 flex items-center bg-background/50 backdrop-blur-[8px]">
      <div className="mx-auto max-w-7xl py-3 px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex items-center justify-between">
          {/* Mobile Sidebar - Small Screens only */}
          <div className="block md:hidden">
            <MobileSideBar />
          </div>

          <Logo />

          {/* Nav Menu Links - Larger screens only */}
          <div className="hidden md:block">
            <NavMenuItems />
          </div>

          {/* Dark Mode and LogIn */}
          <div className="gap-x-2 flex items-center justify-center">
            <ModeToggle />
            <LogInButton />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
