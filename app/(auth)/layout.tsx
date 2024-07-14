import NavBar from "@/components/NavBar";
import { BackgroundGradientAnimation } from "@/components/ui/backgroundGradient";
import React from "react";

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <BackgroundGradientAnimation
      gradientBackgroundEnd="var(--background)"
      gradientBackgroundStart="var(--background)"
      firstColor="var(--firstColor)"
      secondColor="var(--secondColor)"
      thirdColor="var(--thirdColor)"
      fourthColor="var(--fourthColor)"
      fifthColor="var(--fifthColor)"
      size="80%"
      interactive={false}
    >
      <div className="absolute h-screen w-full z-50 bg-transparent dark:bg-dot-white/[0.2] bg-dot-black/[0.2] flex items-center justify-center">
        <div className="pt-[69px] h-[calc(100vh-69px)] flex items-center justify-center w-full">
          <NavBar />
          {children}
        </div>
      </div>
    </BackgroundGradientAnimation>
  );
};

export default AuthLayout;
