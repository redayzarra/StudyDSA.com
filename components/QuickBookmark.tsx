import getBookmark from "@/actions/bookmark/getBookmark";
import { FaBookmark, FaRegBookmark } from "react-icons/fa6";

const QuickBookmark = async ({ userId }: { userId: string }) => {
  const bookmark = await getBookmark(userId);

  return bookmark ? (
    <h2 className="text-muted-foreground">
      Your bookmark is on:{" "}
      <a href={bookmark.href} className="text-primary font-bold underline">
        {bookmark.title}
      </a>
    </h2>
  ) : (
    <div className="flex items-center space-x-2">
      {bookmark ? <FaBookmark className="text-primary" /> : <FaRegBookmark />}
      <p className="text-muted-foreground">You haven't bookmarked anything</p>
    </div>
  );
};

export default QuickBookmark;
