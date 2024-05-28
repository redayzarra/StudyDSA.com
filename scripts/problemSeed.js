const { PrismaClient } = require("@prisma/client");
const database = new PrismaClient();

const leetCodeProblems = [
  {
    title: "Two Sum",
    href: "https://leetcode.com/problems/two-sum/description/",
    difficulty: "Easy",
    completed: false,
    masteryLevel: "Practicing",
    notes: "Use a hash map to find complements efficiently.",
    videoURL: "https://www.youtube.com/watch?v=KLlXCFG5TnA",
    tags: [
      { tag: "Array" },
      { tag: "Hash Table" },
    ],
  },
  {
    title: "Add Two Numbers",
    href: "https://leetcode.com/problems/add-two-numbers/description/",
    difficulty: "Medium",
    completed: false,
    masteryLevel: "Practicing",
    notes: "Use linked lists to add numbers represented by nodes.",
    videoURL: "https://www.youtube.com/watch?v=LBVsXSMOIk4",
    tags: [
      { tag: "Linked List" },
      { tag: "Math" },
    ],
  },
];

async function seedLeetCodeProblems() {
  await database.leetCodeProblem.deleteMany({});
  await database.problemTag.deleteMany({});

  for (const problem of leetCodeProblems) {
    const tags = problem.tags.map(tag => ({
      where: { tag: tag.tag },
      create: { tag: tag.tag },
    }));

    await database.leetCodeProblem.create({
      data: {
        title: problem.title,
        href: problem.href,
        difficulty: problem.difficulty,
        completed: problem.completed,
        masteryLevel: problem.masteryLevel,
        notes: problem.notes,
        videoURL: problem.videoURL,
        tags: {
          connectOrCreate: tags,
        },
      },
    });
  }

  console.log(`${leetCodeProblems.length} LeetCode problems have been inserted.`);
}

seedLeetCodeProblems()
  .catch(e => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await database.$disconnect();
  });

