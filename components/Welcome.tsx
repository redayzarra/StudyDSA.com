import { User } from "next-auth";
import UserAvatar from "./auth/UserAvatar";
import { Separator } from "./ui/separator";
import QuickBookmark from "./QuickBookmark";
import Progress from "./Progress";
import getTopicProgress from "@/actions/topics/getTopicProgress";
import getAlgoProgress from "@/actions/algorithms/getAlgoProgress";
import { cn } from "@/lib/utils";
import { Poppins } from "next/font/google";
import WelcomeCard from "./WelcomeCard";

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
    <WelcomeCard>

      <div className="flex items-center space-x-4">
        <UserAvatar user={user} userName={userName} />
        <h1
          className={cn(
            "text-2xl font-extrabold line-clamp-2 bg-clip-text text-transparent bg-gradient-to-b from-neutral-700 to-neutral-900 dark:from-neutral-50 dark:to-neutral-400 bg-opacity-50",
            font.className
          )}
        >
          {greeting}, {userName}!
        </h1>
      </div>
      <Separator className="my-4 self-stretch bg-border" />
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
    </WelcomeCard>
  );
};

export default Welcome;
