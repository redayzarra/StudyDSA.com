import { User } from "next-auth";
import UserAvatar from "./auth/UserAvatar";
import { Separator } from "./ui/separator";
import QuickBookmark from "./QuickBookmark";

interface Props {
  user: User;
  userName: string;
}

const Welcome = ({ user, userName }: Props) => {
  const currentHour = new Date().getHours();
  let greeting;
  if (currentHour >= 5 && currentHour < 12) {
    greeting = "Good morning";
  } else if (currentHour >= 12 && currentHour < 17) {
    greeting = "Good afternoon";
  } else {
    greeting = "Good evening";
  }

  return (
    <div className="w-full shadow-lg rounded-md bg-slate-200/50 dark:bg-zinc-950/50 border-t-2 border-white dark:border-stone-700 p-6">
      <div className="flex items-center space-x-4">
        <UserAvatar user={user} userName={userName} />
        <h1 className="text-2xl font-bold line-clamp-2">
          {greeting}, {userName}!
        </h1>
      </div>
      <Separator className="my-4 self-stretch bg-black/10 dark:bg-border" />
      <QuickBookmark userId={user.id!} />
    </div>
  );
};

export default Welcome;
