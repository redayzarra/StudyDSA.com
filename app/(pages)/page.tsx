import Advanced from "@/components/Advanced";
import Basics from "@/components/Basics";
import BlurryWelcome from "@/components/BlurryWelcome";
import Intermediate from "@/components/Intermediate";
import MasterDSA from "@/components/MasterDSA";
import Welcome from "@/components/Welcome";
import getUser from "@/hooks/server/getUser";

export default async function Home() {
  const user = await getUser();
  const userName = (user?.name ?? user?.username)?.trim();

  return (
    <div className="mt-24 md:mt-40">
      <div className="space-y-14">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-12">
          <MasterDSA />
          {user ? (
            <Welcome user={user} userName={userName!} />
          ) : (
            <BlurryWelcome />
          )}
        </div>
        <Basics />
        <Intermediate />
        <Advanced />
      </div>
    </div>
  );
}
