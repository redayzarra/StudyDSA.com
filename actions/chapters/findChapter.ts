import { ChapterWithProgress } from "@/types/chapters";

interface TopicWithChapters {
  id: number;
  title: string;
  description: string;
  href: string;
  chapters: ChapterWithProgress[];
}

const findChapter = (topic: TopicWithChapters, name: string): ChapterWithProgress | undefined => {
  return topic?.chapters.find((chapter) => chapter.title === name);
};

export default findChapter;
