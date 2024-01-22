import AlgorithmsSkills from "@/components/AlgorithmsSkills";
import DataStructureSkills from "@/components/DataStructureSkills";

export default function Home() {
  return (
    <div className="mt-40">
      <div className="space-y-14">
        {/* Title and Heading */}
        <div className="flex flex-col space-y-2 items-center justify-center">
          <h1 className="font-bold text-5xl text-center">
            Master Data Structures & Algorithms
          </h1>
          <h2 className="dark:text-muted-foreground text-lg text-center">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. <br />
            Dolorum eveniet libero, ipsa totam laborum numquam provident.
          </h2>
        </div>
        <DataStructureSkills />
        <AlgorithmsSkills />
      </div>
    </div>
  );
}
