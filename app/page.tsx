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
      <NavBar />
      <Aurora className="pt-[60px] min-h-[calc(100vh-60px)] flex flex-col justify-center">
        <Container className="mt-[calc(100vh+400px)] md:mt-0 flex-grow flex flex-col justify-center">
          <div className="grid grid-cols-1 md:grid-cols-[3fr_5fr] gap-x-3 items-center">
            <div>
              <MasterDSA />
              <div className="-mt-8 mb-4">
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
    </div>
  );
}
