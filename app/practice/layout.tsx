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
        <Container className="absolute mt-20 md:mt-36">
          <div className="block md:hidden mb-8">
            <QuestionsTabs />
          </div>
          {children}
        </Container>
      </Aurora>
    </div>
  );
};

export default PracticeLayout;
