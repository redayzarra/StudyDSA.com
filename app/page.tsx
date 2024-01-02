export default function Home() {
  return (
    <div className="flex flex-col space-y-4 items-center justify-center">
      <h2 className="flex md:hidden text-xl font-extrabold text-muted-foreground">
        Everything you need for
      </h2>
      <h2 className="hidden md:flex text-4xl font-extrabold text-muted-foreground">
        Everything you need to
      </h2>
      <h1 className="flex md:hidden text-4xl font-black text-center">
        Data Structures and Algorithms
      </h1>
      <h1 className="hidden md:flex text-5xl font-black text-center">
        Master Data Structures & Algorithms
      </h1>
    </div>
  );
}
