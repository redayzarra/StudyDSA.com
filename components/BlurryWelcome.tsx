import { cn } from "@/lib/utils";
import { Poppins } from "next/font/google";
import Link from "next/link";
import NeoButton from "./NeoButton";
import LoginButton from "./auth/LoginButton";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Button } from "./ui/button";
import { Separator } from "./ui/separator";

const font = Poppins({
  subsets: ["latin"],
  weight: ["600"],
});

const BlurryWelcome = () => {
  return (
    <div className="w-full backdrop-blur-[1px] shadow-lg rounded-md bg-slate-200/50 dark:bg-neutral-900/20 border-t-[1px] border-white dark:border-stone-700 p-6">
      <div className="absolute inset-x-0 h-[1px] mx-auto -top-px bg-gradient-to-r from-transparent via-stone-400 to-transparent" />
      <div className="blur-lg cursor-default">
        <div className="flex items-center space-x-4">
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <h1 className="text-2xl text-gray-500 dark:text-gray-300 font-bold">
            Good morning, Steve!
          </h1>
        </div>
        <Separator className="my-4 self-stretch" />
        <h2 className="text-muted-foreground">
          Your bookmark is on: <span className="text-primary">Basics</span>
        </h2>
      </div>
      <div className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center">
        <h1 className={cn("text-lg font-semibold text-center", font.className)}>
          Log in to access all features
        </h1>
        <p className="text-muted-foreground pb-5 flex space-x-1 items-center">
          It's easy and free!
        </p>
        <div className="flex space-x-4">
          <LoginButton>
            <NeoButton>
              <span className="text-base font-normal px-2">Login</span>
            </NeoButton>
          </LoginButton>
          <Link href="/register">
            <Button size="sm" variant="link" className="text-foreground">
              Create Account
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BlurryWelcome;
