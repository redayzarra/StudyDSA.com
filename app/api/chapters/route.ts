import getUserId from "@/hooks/client/getUserId";
import db from "@/lib/db";
import { NextRequest, NextResponse } from "next/server";

export async function FETCH(req: NextRequest) {
  try {
    // Authenticating the user
    const userId = getUserId(); 
    if (!userId) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }

    const firstChapter = await db.chapterProgress.findFirst({
      where: {
        userId: userId,
        isComplete: false
      },
      orderBy: {
        chapter: {
          id: 'asc'
        }
      },
      select: {
        chapter: {
          select: {
            href: true
          }
        }
      }
    });

    return NextResponse.json(firstChapter);

    // Error handling
  } catch (error) {
    console.log("[FIRST CHAPTER]", error);
    return NextResponse.json({ error: "Internal Error" }, { status: 500 });
  }
}
