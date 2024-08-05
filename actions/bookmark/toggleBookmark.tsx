"use server";

import db from "@/lib/db";

const toggleBookmark = async (userId: string, href: string, title: string) => {
  try {
    const existingBookmark = await db.bookmark.findUnique({
      where: { userId },
    });

    if (existingBookmark) {
      await db.bookmark.delete({
        where: { userId },
      });
      return false;
    } else {
      await db.bookmark.create({
        data: { userId, href, title },
      });
      return true;
    }
  } catch (error) {
    console.error("Failed to toggle bookmark:", error);
    throw error;
  }
};

export default toggleBookmark;
