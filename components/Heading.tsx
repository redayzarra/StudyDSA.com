import { cn } from "@/lib/utils";
import { Topic } from "@prisma/client";
import { Poppins } from "next/font/google";
import { TiArrowRight } from "react-icons/ti";
import { Spotlight } from "./ui/Spotlight";

const font = Poppins({
  subsets: ["latin"],
  weight: ["700"],
});

const Heading = ({ topic }: { topic: Topic }) => {
  return (
    <div className="space-y-6 relative">
      <p className="flex text-sm items-center text-muted-foreground gap-x-1">
        Data Structures <TiArrowRight size={15} />
        <span className="text-foreground">{topic.title}</span>
      </p>

      <div className="space-y-2">
        <h1 className={cn("text-4xl font-bold", font.className)}>
          {topic.title}
        </h1>
        <h2 className="dark:text-muted-foreground">{topic.description}</h2>
      </div>
      <Spotlight className="hidden dark:block w-screen overflow-hidden top-[-10rem] left-[-4rem] md:h-[700%] md:top-[-14rem] md:left-[-13rem] " />
    </div>
  );
};

export default Heading;
