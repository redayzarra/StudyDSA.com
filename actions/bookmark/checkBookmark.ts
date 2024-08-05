"use server";

import db from "@/lib/db";

const checkBookmark = async (userId: string) => {
  try {
    // Query to find the bookmark by userId
    const bookmark = await db.bookmark.findUnique({
      where: {
        userId,
      },
    });

    // Return the bookmark if it exists
    return bookmark;

  } catch (error) {
    console.error("Error:", error);
    throw error;
  }
};

export default checkBookmark;

