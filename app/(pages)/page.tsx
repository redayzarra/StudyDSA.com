import { auth } from "@/auth";
import Advanced from "@/components/Advanced";
import Basics from "@/components/Basics";
import Intermediate from "@/components/Intermediate";
import MasterDSA from "@/components/MasterDSA";
import Welcome from "@/components/Welcome";

export default async function Home() {
  const session = await auth();
  return (
    <div className="mt-40">
      <div className="space-y-14">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <MasterDSA />
          <Welcome />
        </div>
        <Basics />
        <Intermediate />
        <Advanced />
      </div>
    </div>
  );
}
