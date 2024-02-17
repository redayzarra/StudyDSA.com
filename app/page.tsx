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
    <div className="w-full noise-filter rounded-md flex md:items-center md:justify-center bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden">
      <NavBar />
      <Container>
        <div className="space-y-14 mt-56">
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
