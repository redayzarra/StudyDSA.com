import LandingCard from "@/components/LandingCard";

export default function Home() {
  return (
    <div>
      <div className="space-y-14">
        {/* Title and Heading */}
        <div className="flex flex-col space-y-2 items-center justify-center">
          <h1 className="font-bold text-4xl text-center">
            Master Data Structures & Algorithms
          </h1>
          <h2 className="dark:text-muted-foreground text-center max-w-lg">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorum
            eveniet libero, ipsa totam laborum numquam provident tempora
            inventore. Asperiores, praesentium!
          </h2>
        </div>
        <LandingCard />
      </div>
    </div>
  );
}
