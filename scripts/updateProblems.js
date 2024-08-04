const { PrismaClient } = require("@prisma/client");
const database = new PrismaClient();

const updatedProblems = [
  {
    id: 186,
    newId: 186,
    title: "Min Cost to Connect All Points",
    href: "https://leetcode.com/problems/min-cost-to-connect-all-points/description",
  },
]

async function updateProblems() {
  try {
    for (const problem of updatedProblems) {
      await database.leetCodeProblem.update({
        where: { id: problem.id },
        data: {
          id: problem.newId,
          title: problem.title,
          href: problem.href
        },
      });
    }
    console.log(`${updatedProblems.length} LeetCode problems have been updated.`);
  } catch (error) {
    console.error("Error updating problems:", error);
  }
}

updateProblems()
  .catch(e => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await database.$disconnect();
  });
