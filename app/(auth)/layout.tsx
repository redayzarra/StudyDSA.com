import NavBar from "@/components/NavBar";
import { BackgroundGradientAnimation } from "@/components/ui/backgroundGradient";
import React from "react";

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <BackgroundGradientAnimation
      containerClassName="h-screen overflow-hidden"
      gradientBackgroundEnd="--var(bg-background)"
      gradientBackgroundStart="--var(bg-background)"
      firstColor="10, 178, 216"
      secondColor="68, 140, 16"
      thirdColor="242, 184, 12"
      fourthColor="242, 161, 12"
      fifthColor="216, 67, 13"
    >
      <div className="absolute h-screen w-full z-50 bg-transparent dark:bg-dot-white/[0.2] bg-dot-black/[0.2] flex items-center justify-center">
        <div className="h-screen flex flex-grow items-center justify-center w-full">
          <NavBar />
          {children}
        </div>
      </div>
    </BackgroundGradientAnimation>
  );
};

export default AuthLayout;
