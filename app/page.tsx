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
    <div className="">
      <Aurora>
        <NavBar />
        <Container>
          <div className="mt-36 md:mt-48">
            <div className="grid grid-cols-1 transition-all md:grid-cols-[3fr_5fr] gap-x-10 gap-y-12">
              <div className="">
                <MasterDSA />
                {user ? (
                  <Welcome user={user} userName={firstName!} />
                ) : (
                  <BlurryWelcome />
                )}
              </div>
              <WelcomeGrid />
            </div>
          </div>
        </Container>
      </Aurora>
    </div>
  );
}
