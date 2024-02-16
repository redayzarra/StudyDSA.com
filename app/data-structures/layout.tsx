import NavBar from "@/components/NavBar";
import TableOfContents from "@/components/TableOfContents";

const DataStructuresLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="">
      <NavBar />
      <div className="container pt-16 flex-1 items-start md:grid md:grid-cols-[220px_minmax(0,1fr)] md:gap-6 lg:grid-cols-[240px_minmax(0,1fr)] gap-10">
        <aside className="fixed top-16 border-r z-3 -ml-2 hidden h-[100vh] w-full shrink-0 md:sticky md:block">
          <TableOfContents />
        </aside>
        <div className="pt-10 max-w-4xl">
          {children}
        </div>
      </div>
    </div>
  );
};

export default DataStructuresLayout;
