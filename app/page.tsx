import BlurryWelcome from "@/components/BlurryWelcome";
import Container from "@/components/Container";
import MasterDSA from "@/components/MasterDSA";
import NavBar from "@/components/NavBar";
import { Aurora } from "@/components/ui/Aurora";
import Welcome from "@/components/Welcome";
import { WelcomeGrid } from "@/components/WelcomeGrid";
import getUser from "@/hooks/server/getUser";

export default async function Home() {
  const user = await getUser();
  const userName = (user?.name ?? user?.username)?.trim();
  const firstName = userName?.split(" ")[0];

  return (
    <Aurora className="min-h-screen md:min-h-[800px]">
      <NavBar />
      <Container className="flex flex-col justify-start min-h-screen pt-24 md:justify-center">
        <div className="grid grid-cols-1 md:grid-cols-[3fr_5fr] gap-x-3 w-full max-w-7xl px-4 py-8 md:py-12">
          <div>
            <MasterDSA />
            <div className="mt-3 mb-3">
              {user ? (
                <Welcome user={user} userName={firstName!} />
              ) : (
                <BlurryWelcome />
              )}
            </div>
          </div>
          <WelcomeGrid />
        </div>
      </Container>
    </Aurora>
  );
}
