import { Chapter, ChapterProgress } from "@prisma/client";

export type ChapterWithProgress = Chapter & {
  progress?: ChapterProgress | null;
};