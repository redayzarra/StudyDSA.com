import Advanced from "@/components/Advanced";
import Basics from "@/components/Basics";
import Intermediate from "@/components/Intermediate";
import MasterDSA from "@/components/MasterDSA";
import UserProgress from "@/components/UserProgress";

export default function Home() {
  return (
    <div className="mt-40">
      <div className="space-y-14">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <MasterDSA />
          <UserProgress />
        </div>
        <Basics />
        <Intermediate />
        <Advanced />
      </div>
    </div>
  );
}
