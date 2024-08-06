import Link from "next/link";

interface Props {
  title: string;
  description: string;
  href: string;
}

const SkillTreeCell = ({ title, href, description }: Props) => {
  return (
    <div className="relative">
      <Link href={href}>
        <div className="rounded-sm transition-all p-2 bg-transparent hover:bg-gray-300/40 dark:hover:bg-neutral-500/20 hover:cursor-pointer space-y-2">
          <h1 className="font-semibold">{title}</h1>
          <h2 className="line-clamp-2 text-muted-foreground">{description}</h2>
        </div>
      </Link>
    </div>
  );
};

export default SkillTreeCell;
