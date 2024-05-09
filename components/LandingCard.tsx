import { FaCode } from "react-icons/fa6";
import { Button } from "./ui/button";
import GlassCard from "./GlassCard";
import { dataStructures } from "@/data/navData";
import Link from "next/link";

const LandingCard = () => {
  return (
    <div className="rounded-lg p-4 bg-gradient-to-t md:bg-gradient-to-l from-transparent via-transparent to-color1">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
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
            {dataStructures.map((item, index) => (
              <Link key={index} href={item.href}>
                <GlassCard className="rounded-sm p-2 font-medium bg-zinc-400/20 line-clamp-1 truncate">
                  {item.title}
                </GlassCard>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingCard;
