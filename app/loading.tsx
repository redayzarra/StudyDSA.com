import BlurryWelcome from "@/components/BlurryWelcome";
import Container from "@/components/Container";
import LoadingMasterDSA from "@/components/loading/LoadingMasterDSA";
import LoadingWelcome from "@/components/loading/LoadingWelcome";
import NavBar from "@/components/NavBar";
import { Aurora } from "@/components/ui/Aurora";
import { WelcomeGrid } from "@/components/WelcomeGrid";

export default async function LoadingHome() {
  return (
    <Aurora className="">
      <NavBar />
      <Container className="flex flex-col justify-start min-h-screen pt-24 md:justify-center">
        <div className="grid grid-cols-1 md:grid-cols-[3fr_5fr] gap-x-3 w-full max-w-7xl px-4 py-8 md:py-12">
          <div>
            <LoadingMasterDSA />
            <LoadingWelcome />
          </div>
          <WelcomeGrid />
        </div>
      </Container>
    </Aurora>
  );
}
