"use server";

import db from "@/lib/db";

const getBookmark = async (userId: string) => {
  try {
    const bookmark = await db.bookmark.findUnique({
      where: { userId },
      select: {
        id: true,
        href: true,
        title: true,
      },
    });

    return bookmark;

  } catch (error) {
    console.error("Failed to get bookmark:", error);
    throw error;
  }
};

export default getBookmark;
