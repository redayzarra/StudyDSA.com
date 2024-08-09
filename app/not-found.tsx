import Logo from "@/components/Logo";
import NavBar from "@/components/NavBar";
import { Aurora } from "@/components/ui/Aurora";
import { cn } from "@/lib/utils";
import { Poppins } from "next/font/google";
import React from "react";
import Balancer from "react-wrap-balancer";

const font = Poppins({
  subsets: ["latin"],
  weight: ["500"],
});

const NotFoundPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />
      <Aurora className="flex-grow flex items-center justify-center">
        <div className="space-y-6 flex flex-col items-center justify-center text-center">
          <h1 className="text-9xl font-extrabold">404</h1>
          <h2 className={cn("text-3xl", font.className)}>
            <Balancer>Uh oh. This page doesn&apos;t exist.</Balancer>
          </h2>
          <h3 className="px-4 text-muted-foreground">
            <Balancer>
              The page you are looking for is temporarily unavailable. Don&apos;t worry
              I will fix this in no time.
            </Balancer>
          </h3>
        </div>
      </Aurora>
    </div>
  );
};

export default NotFoundPage;
