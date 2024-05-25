import { QuestionsTable } from "@/components/QuestionsTable";
import QuestionsTabs from "@/components/QuestionsTabs";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";
import { Poppins } from "next/font/google";

const font = Poppins({
  subsets: ["latin"],
  weight: ["700"],
});

const PracticePage = () => {
  return (
    <div className="">
      <div className="space-y-6 relative">
        <div className="space-y-2">
          <h1 className={cn("text-4xl md:text-6xl font-bold", font.className)}>
            NeetCode 150 🚀
          </h1>
          <h2 className="dark:text-muted-foreground">Description here</h2>
        </div>
        {/* <Spotlight className="block w-screen overflow-hidden top-[-10rem] left-[-4rem] md:h-[700%] md:top-[-14rem] md:left-[-13rem] " /> */}
      </div>
      <Separator className="my-4 self-stretch bg-border" />
      <div className="grid grid-cols-1 transition-all md:grid-cols-[1fr_5fr] gap-x-3">
        <div className="mt-4 hidden md:block">
          <QuestionsTabs />
        </div>
        <div className="w-full">
          <QuestionsTable />
        </div>
      </div>
    </div>
  );
};

export default PracticePage;
