import getUserId from "@/hooks/getUserId";
import db from "@/lib/db";
import { NextRequest, NextResponse } from "next/server";

export async function FETCH(req: NextRequest) {
  try {
    const userId = getUserId();
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
