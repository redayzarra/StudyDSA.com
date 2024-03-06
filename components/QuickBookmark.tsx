import getBookmark from "@/actions/bookmark/getBookmark";
import { FaBookmark, FaRegBookmark } from "react-icons/fa6";

const QuickBookmark = async ({ userId }: { userId: string }) => {
  const bookmark = await getBookmark(userId);
  const iconSize = 18;

  return (
    <div className="ml-0.5 flex items-center space-x-2">
      {bookmark ? (
        <>
          <FaBookmark size={iconSize} />
          <a href={bookmark.href} className="text-muted-foreground font-medium">
            Your bookmark is on:{" "}
            <span className="text-yellow-500 dark:text-primary font-bold underline">
              {bookmark.title}
            </span>
          </a>
        </>
      ) : (
        <>
          <FaRegBookmark size={iconSize} />
          <p className="text-muted-foreground font-medium">
            You haven't bookmarked anything
          </p>
        </>
      )}
    </div>
  );
};

export default QuickBookmark;
