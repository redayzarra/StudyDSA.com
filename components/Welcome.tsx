import { User } from "next-auth";
import UserAvatar from "./auth/UserAvatar";
import { Separator } from "./ui/separator";
import QuickBookmark from "./QuickBookmark";
import Progress from "./Progress";
import getTopicProgress from "@/actions/topics/getTopicProgress";
import getAlgoProgress from "@/actions/algorithms/getAlgoProgress";
import { cn } from "@/lib/utils";
import { Poppins } from "next/font/google";

const font = Poppins({
  subsets: ["latin"],
  weight: ["700"],
});

interface Props {
  user: User;
  userName: string;
}

const Welcome = async ({ user, userName }: Props) => {
  const currentHour = new Date().getHours();
  let greeting;
  if (currentHour >= 5 && currentHour < 12) {
    greeting = "Good morning";
  } else if (currentHour >= 12 && currentHour < 17) {
    greeting = "Good afternoon";
  } else {
    greeting = "Good evening";
  }

  const [dataCompleted, dataTotal] = await getTopicProgress(user.id!);
  const [algoCompleted, algoTotal] = await getAlgoProgress(user.id!);

  return (
    <div className="w-full backdrop-blur-[1px] shadow-lg rounded-md bg-slate-200/50 dark:bg-black/25 border-t-[1px] border-white dark:border-stone-700 p-6">
      <div className="flex items-center space-x-4">
        <UserAvatar user={user} userName={userName} />
        <h1 className={cn("text-2xl font-extrabold line-clamp-2 bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50", font.className)}>
          {greeting}, {userName}!
        </h1>
      </div>
      <Separator className="my-4 self-stretch bg-black/10 dark:bg-border" />
      <div className="flex flex-col space-y-3">
        <QuickBookmark userId={user.id!} />
        <Progress
          type="dataStructure"
          completed={dataCompleted}
          total={dataTotal}
        />
        <Progress
          type="algorithm"
          completed={algoCompleted}
          total={algoTotal}
        />
      </div>
    </div>
  );
};

export default Welcome;
