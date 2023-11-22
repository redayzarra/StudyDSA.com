import Link from "next/link";
import { FaBook } from "react-icons/fa6";
import { ModeToggle } from "./ModeToggle";
import { NavMenuLinks } from "./NavMenuItems";
import { Button } from "./ui/button";
import MobileSideBar from "./MobileSideBar";

const NavBar = () => {
  return (
    <div className="border-b shadow-sm flex items-center">
      <div className="mx-auto max-w-7xl py-3 px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex items-center justify-between">
          {/* Mobile Sidebar */}
          <div className="block md:hidden">
            <MobileSideBar />
          </div>

          {/* Logo */}
          <Link href={"/"}>
            <div className="gap-x-1 flex items-center">
              <FaBook size={25} />
              <h1 className="text-2xl font-black">StudyDSA</h1>
            </div>
          </Link>

          {/* Nav Menu Links */}
          <div className="hidden md:block">
            <NavMenuLinks />
          </div>

          {/* Dark Mode */}
          <div className="gap-x-2 flex items-center justify-center">
            <ModeToggle />
            <Link href="/sign-in">
              <Button size="sm" className="font-semibold">
                Sign In
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
