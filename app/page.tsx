import Advanced from "@/components/Advanced";
import Basics from "@/components/Basics";
import BlurryWelcome from "@/components/BlurryWelcome";
import Container from "@/components/Container";
import Intermediate from "@/components/Intermediate";
import MasterDSA from "@/components/MasterDSA";
import NavBar from "@/components/NavBar";
import Welcome from "@/components/Welcome";
import { Spotlight } from "@/components/ui/Spotlight";
import { BackgroundGradientAnimation } from "@/components/ui/backgroundGradient";
import getUser from "@/hooks/server/getUser";

export default async function Home() {
  const user = await getUser();
  const userName = (user?.name ?? user?.username)?.trim();

  return (
    <BackgroundGradientAnimation
      className="-mb-[1300px]"
      gradientBackgroundEnd="var(--background)"
      gradientBackgroundStart="var(--background)"
      firstColor="var(--firstColor)"
      secondColor="var(--secondColor)"
      thirdColor="var(--thirdColor)"
      fourthColor="var(--fourthColor)"
      fifthColor="var(--fifthColor)"
      size="40%"
      interactive={false}
    >
      <div className="absolute overflow-hidden w-full z-50 bg-slate-900/10 dark:bg-dot-white/[0.2] bg-dot-black/[0.2] flex items-center justify-center">
        <NavBar />
        <Container>
          <div className="space-y-14 mt-24">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-12">
              {/* <Spotlight
                className="top-[-78rem] left-[-25rem] md:top-[-70rem] md:left-[-50rem] lg:left-[-25rem] lg:top-[-55rem]"
                fill="white"
              /> */}
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
    </BackgroundGradientAnimation>
  );
}
