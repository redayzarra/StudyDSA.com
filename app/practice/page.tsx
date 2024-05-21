import CodeBlock from "@/components/CodeBlock";
import NavBar from "@/components/NavBar";
import NotationsChart from "@/components/NotationsChart";

const PracticePage = () => {
  const helloCode = `def welcome(is_new):
      if is_new:
          return "Hello!"
      return "Welcome Back!"`;
  
  return (
    <div className="flex w-full relative bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-background via-muted-foreground/10 to-muted-foreground/[0.22] dark:bg-neutral-950/[0.96] dark:bg-dot-white/[0.05]">
      <NavBar />
      <NotationsChart />
      <CodeBlock
          code={helloCode}
          language="python"
          title="HarderExample.py"
        />
    </div>
  );
};

export default PracticePage;
