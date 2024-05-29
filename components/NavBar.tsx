"use client";

import { authRoutes } from "@/routes";
import { usePathname } from "next/navigation";
import UserButton from "./auth/UserButton";
import Logo from "./Logo";
import { SearchBar } from "./SearchBar";

const NavBar = () => {
  const pathname = usePathname();
  const authRoute = authRoutes.includes(pathname);

  return (
    <div className="shadow-md border-b fixed top-0 left-0 right-0 z-50 flex items-center bg-slate-200/50 dark:bg-zinc-950/70 backdrop-blur-[8px] min-h-[69px]">
      <div className="mx-auto max-w-[85rem] py-3 px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex items-center justify-between">
          <Logo />

          <div className="flex gap-x-2 items-center justify-center">
            <SearchBar />
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
