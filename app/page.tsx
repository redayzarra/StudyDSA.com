import BlurryWelcome from "@/components/BlurryWelcome";
import Container from "@/components/Container";
import MasterDSA from "@/components/MasterDSA";
import NavBar from "@/components/NavBar";
import { Aurora } from "@/components/ui/Aurora";
import Welcome from "@/components/Welcome";
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
            <div className="space-y-24 mt-24 md:mt-44">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-24 gap-y-12">
                <MasterDSA />
                {user ? (
                  <Welcome user={user} userName={firstName!} />
                ) : (
                  <BlurryWelcome />
                )}
              </div>
            </div>
          </Container>
      </Aurora>
    </div>
  );
}
