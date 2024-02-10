import Advanced from "@/components/Advanced";
import Basics from "@/components/Basics";
import Intermediate from "@/components/Intermediate";
import MasterDSA from "@/components/MasterDSA";
import Welcome from "@/components/auth/Welcome";
import getUser from "@/hooks/getUser";

export default function Home() {
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
