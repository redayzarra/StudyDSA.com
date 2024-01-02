export default function Home() {
  return (
    <div>
      <div className="flex md:hidden space-y-2 flex-col items-center justify-center">
        <h2 className="text-xl font-extrabold text-muted-foreground">
          Everything you need for
        </h2>
        <h1 className="text-4xl font-black text-center">
          Data Structures and Algorithms
        </h1>
      </div>
      <div className="hidden md:flex space-y-4 flex-col items-center justify-center">
        <h2 className="text-3xl font-extrabold text-muted-foreground">
          Everything you need to
        </h2>
        <h1 className="text-5xl font-black text-center">
          Master Data Structures & Algorithms
        </h1>
      </div>
    </div>
  );
}
