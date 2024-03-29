"use server";

import { Chapter } from "@prisma/client";

interface TopicWithChapters {
  id: string;
  title: string;
  description: string;
  href: string;
  chapters: Chapter[];
}

const findChapter = (topic: TopicWithChapters, name: string) => {
  return topic?.chapters.find((chapter) => chapter.title === name);
};

export default findChapter;