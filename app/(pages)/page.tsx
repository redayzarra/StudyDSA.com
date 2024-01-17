import LandingCard from "@/components/LandingCard";

export default function Home() {
  return (
    <div>
      <div className="">
        {/* Title and Heading */}
        <div className="flex flex-col space-y-2 items-center justify-center">
          <h1 className="font-bold text-4xl text-center">Master Data Structures & Algorithms</h1>
          <h2 className="dark:text-muted-foreground hidden md:flex">
            Everything you need to ace the coding interviews for free. No ads.
            No payments. No bullshit.
          </h2>
        </div>
        <LandingCard />
      </div>
    </div>
  );
}
