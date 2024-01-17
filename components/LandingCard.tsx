import { FaCode } from "react-icons/fa6";
import { Button } from "./ui/button";
import GlassCard from "./GlassCard";

const LandingCard = () => {
  return (
    <div className="rounded-lg p-4 bg-gradient-to-l from-transparent via-transparent to-primary/50">
      <div className="grid grid-cols-1 md:grid-cols-2">
        {/* Left Side */}
        <div className="space-y-4">
          <h1 className="text-4xl font-bold">Data Structures</h1>
          <h2>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Numquam,
            sapiente? Maiores facere optio laboriosam quisquam.
          </h2>
          <Button variant="secondary">
            Basics <FaCode size={15} className="ml-2"></FaCode>
          </Button>
        </div>

        {/* Right Side */}
        <div className="">
          <div className="grid grid-cols-2 gap-2">
            <GlassCard className="rounded-sm p-2" backgroundColor="bg-red-400">Arrays</GlassCard>
            <GlassCard className="rounded-sm">With stuff inside</GlassCard>
            <GlassCard className="rounded-sm">With stuff inside</GlassCard>
            <GlassCard className="rounded-sm">With stuff inside</GlassCard>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingCard;
