import Advanced from "@/components/Advanced";
import Basics from "@/components/Basics";
import BlurryWelcome from "@/components/BlurryWelcome";
import Container from "@/components/Container";
import Intermediate from "@/components/Intermediate";
import MasterDSA from "@/components/MasterDSA";
import NavBar from "@/components/NavBar";
import Welcome from "@/components/Welcome";
import { Spotlight } from "@/components/ui/Spotlight";
import getUser from "@/hooks/server/getUser";

export default async function Home() {
  const user = await getUser();
  const userName = (user?.name ?? user?.username)?.trim();

  return (
    <div className="w-full dark:bg-black bg-white  dark:bg-dot-white/[0.2] bg-dot-black/[0.2] relative flex items-center justify-center">
      <NavBar />
      <Container>
        <div className="mt-24 md:mt-40">
          <div className="space-y-14">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-12">
              <Spotlight
                className="top-[-78rem] left-[-25rem] md:top-[-70rem] md:left-[-50rem] lg:left-[-25rem] lg:top-[-55rem]"
                fill="white"
              />
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
      </Container>
    </div>
  );
}
