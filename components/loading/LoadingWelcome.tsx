import { AiOutlineFunction, AiOutlineNodeIndex } from "react-icons/ai";
import { FaRegBookmark } from "react-icons/fa6";
import { Avatar, AvatarFallback } from "../ui/avatar";
import { Separator } from "../ui/separator";
import { Skeleton } from "../ui/skeleton";
import WelcomeCard from "../WelcomeCard";

const LoadingWelcome = () => {
  return (
    <WelcomeCard>
      <div className="flex items-center space-x-4 -mt-8 mb-6">
        <Avatar className="h-10 w-10">
          <AvatarFallback className="bg-stone-300 dark:bg-stone-700">
            A
          </AvatarFallback>
        </Avatar>
        <Skeleton className="h-8 w-72" />
      </div>
      <Separator className="my-4 self-stretch bg-border" />
      <div className="flex flex-col space-y-3">
        <div className="flex items-center space-x-2">
          <FaRegBookmark
            size={18}
            aria-hidden="true"
            className="ml-0.5 mr-[2px]"
          />
          <Skeleton className="h-4 w-44" />
        </div>
        <div className="flex items-center">
          <AiOutlineNodeIndex size={25} className="mr-1.5" />
          <Skeleton className="h-4 w-48" />
        </div>
        <div className="flex items-center">
          <AiOutlineFunction size={25} className="mr-1.5" />
          <Skeleton className="h-4 w-36" />
        </div>
      </div>
    </WelcomeCard>
  );
};

export default LoadingWelcome;
