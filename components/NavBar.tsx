"use client";

import { usePathname } from "next/navigation";
import Logo from "./Logo";
import MobileSideBar from "./MobileSideBar";
import { ModeToggle } from "./ModeToggle";
import LoginButton from "./auth/LoginButton";
import { Button } from "./ui/button";
import LogoutButton from "./auth/LogoutButton";
import { authRoutes } from "@/routes";
import UserButton from "./auth/UserButton";

const NavBar = () => {
  const pathname = usePathname();
  const authRoute = authRoutes.includes(pathname);

  return (
    <div className="shadow-lg fixed top-0 left-0 right-0 z-50 flex items-center bg-background/60 backdrop-blur-[8px]">
      <div className="mx-auto max-w-7xl py-3 px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex items-center justify-between">
          {/* Mobile Sidebar - Small Screens only */}
          <div className="block md:hidden">
            <MobileSideBar />
          </div>

          <div className="hidden md:flex">
            <Logo />
          </div>

          {/* Dark Mode and LogIn */}
          <div className="gap-x-2 flex items-center justify-center">
            <ModeToggle />
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
