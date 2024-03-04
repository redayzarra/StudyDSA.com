import Advanced from "@/components/Advanced";
import Basics from "@/components/Basics";
import BlurryWelcome from "@/components/BlurryWelcome";
import Container from "@/components/Container";
import Intermediate from "@/components/Intermediate";
import MasterDSA from "@/components/MasterDSA";
import NavBar from "@/components/NavBar";
import Welcome from "@/components/Welcome";
import getUser from "@/hooks/server/getUser";

export default async function Home() {
  const user = await getUser();
  const userName = (user?.name ?? user?.username)?.trim();

  return (
    <div className="w-full dark:bg-neutral-950 rounded-md flex md:items-center md:justify-center bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-background via-muted-foreground/10 to-muted-foreground/[0.22] dark:bg-black/[0.96] antialiased dark:bg-grid-small-white/5 relative overflow-hidden">
      <NavBar />
      <Container>
        <div className="space-y-24 mt-24 md:mt-44">
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
      </Container>
    </div>
  );
}
