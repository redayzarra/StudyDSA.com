import Link from "next/link";

interface Props {
  title: string;
  description: string;
  href: string;
}

const AlgorithmCell = ({ title, description, href }: Props) => {
  return (
    <div className="relative hover:-translate-y-1 transition-all duration-200">
      <div
        className={`absolute inset-x-0 h-[1px] mx-auto bg-gradient-to-r from-transparent via-white dark:via-stone-400  to-transparent`}
      />
      <Link href={href}>
        <div
          className={`rounded-sm shadow-md transition-all p-2 hover:cursor-pointer space-y-2 bg-gray-100/25 hover:bg-gray-200/50 dark:bg-muted-foreground/10 dark:hover:bg-muted-foreground/20`}
        >
          <h1 className="font-semibold text-[0.92rem] line-clamp-1">{title}</h1>
          <h2 className={`line-clamp-1 text-muted-foreground text-sm `}>
            {description}
          </h2>
        </div>
      </Link>
    </div>
  );
};

export default AlgorithmCell;
