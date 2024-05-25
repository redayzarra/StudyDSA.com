import Container from "@/components/Container";
import NavBar from "@/components/NavBar";
import QuestionsTabs from "@/components/QuestionsTabs";
import { Aurora } from "@/components/ui/Aurora";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";
import { Poppins } from "next/font/google";
import React from "react";

const font = Poppins({
  subsets: ["latin"],
  weight: ["700"],
});

const PracticeLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="">
      <Aurora>
        <NavBar />
        <Container className="absolute mt-36">
          <div className="space-y-6 relative">
            <div className="space-y-2">
              <h1
                className={cn("text-4xl md:text-6xl font-bold", font.className)}
              >
                Practice
              </h1>
              <h2 className="dark:text-muted-foreground">Description here</h2>
            </div>
            {/* <Spotlight className="block w-screen overflow-hidden top-[-10rem] left-[-4rem] md:h-[700%] md:top-[-14rem] md:left-[-13rem] " /> */}
          </div>
          <Separator className="my-4 self-stretch bg-border" />
          <div className="flex justify-center space-x-2">
            <div className="mt-4 hidden md:block">
              <QuestionsTabs />
            </div>
            {children}
          </div>
        </Container>
      </Aurora>
    </div>
  );
};

export default PracticeLayout;
