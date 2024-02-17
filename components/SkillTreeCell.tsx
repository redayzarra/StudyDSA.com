import Link from "next/link";
import MarkCheckbox from "./MarkCheckbox";

interface Props {
  title: string;
  description: string;
  href: string;
  chapterId: string;
}

const SkillTreeCell = ({ title, href, description, chapterId }: Props) => {
  return (
    <div className="relative">
      <Link href={href}>
        <div className="rounded-sm transition-all p-2 bg-transparent hover:bg-gray-300/40 dark:hover:bg-black/25 hover:cursor-pointer space-y-2">
          <h1 className="font-semibold">{title}</h1>
          <h2 className="line-clamp-2 text-muted-foreground">{description}</h2>
        </div>
      </Link>
      {/* Removing the ability to mark outside of page */}
      {/* <div className="absolute top-2 right-2 text-primary">
        {isChecked ? (
          <FaCheckCircle size={15} />
        ) : (
          <FaRegCircle size={15} />
        )}
      </div> */}

      {/* Be able to mark outside of page */}
      <MarkCheckbox chapterId={chapterId} className="absolute top-2 right-2" />
    </div>
  );
};

export default SkillTreeCell;
