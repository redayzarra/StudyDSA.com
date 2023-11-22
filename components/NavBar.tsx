import Link from "next/link";
import { FaBook } from "react-icons/fa6";
import { ModeToggle } from "./ModeToggle";
import { NavMenuLinks } from "./NavMenuItems";

const NavBar = () => {
  return (
    <div className="border-b shadow-sm flex items-center">
      <div className="mx-auto max-w-7xl py-3 px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href={"/"}>
            <div className="space-x-1 flex items-center">
              <FaBook size={25} />
              <h1 className="text-2xl font-black">StudyDSA</h1>
            </div>
          </Link>

          {/* Nav Menu Links */}
          <NavMenuLinks />

          {/* Dark Mode */}
          <ModeToggle />
        </div>
      </div>
    </div>
  );
};

export default NavBar;
