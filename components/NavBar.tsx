"use client";

import { authRoutes } from "@/routes";
import { usePathname } from "next/navigation";
import Logo from "./Logo";
import MobileSideBar from "./MobileSideBar";
import { ModeToggle } from "./ModeToggle";
import UserButton from "./auth/UserButton";
import { NavMenuItems } from "./NavMenuItems";

const NavBar = () => {
  const pathname = usePathname();
  const authRoute = authRoutes.includes(pathname);

  return (
    <div className="shadow-md border-b fixed top-0 left-0 right-0 z-50 flex items-center bg-slate-200/50 dark:bg-zinc-950/70 backdrop-blur-[8px]">
      <div className="mx-auto max-w-[85rem] py-3 px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex items-center justify-between">
          {/* Mobile Sidebar - Small Screens only */}
          <div className="block md:hidden">
            <MobileSideBar />
          </div>

          <div className="hidden md:flex">
            <Logo />
          </div>

          <div className="block md:hidden absolute left-1/2 transform -translate-x-1/2">
            <Logo />
          </div>

          <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2">
            <NavMenuItems />
          </div>

          {/* Dark Mode and LogIn */}
          <div className="flex gap-x-2 items-center justify-center">
            {!authRoute && (
              <>
                <UserButton />
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
