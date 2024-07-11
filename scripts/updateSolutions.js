const { PrismaClient } = require('@prisma/client');
const problemSolutions = require('./problemSolutions');
const database = new PrismaClient();

function orange(text) {
  return `\x1b[33m${text}\x1b[0m`;
}

function cyan(text) {
  return `\x1b[36m${text}\x1b[0m`;
}

async function updateSolution() {
  let updatedCount = 0;
  
  for (const [title, solution] of Object.entries(problemSolutions)) {
    try {
      const updatedProblem = await database.leetCodeProblem.update({
        where: { title },
        data: { solution },
      });
      console.log(`Updated solution for problem: ${cyan(updatedProblem.title)}`);
      updatedCount++;
    } catch (error) {
      console.error(`Failed to update solution for problem "${cyan(title)}":`, error.message);
    }
  }
  
  console.log("\n");
  console.log(`Finished updating ${orange(updatedCount)} LeetCode problem solutions.`);
}

updateSolution()
  .catch((error) => {
    console.error("Error in seed script:", error);
    process.exit(1);
  })
  .finally(async () => {
    await database.$disconnect();
  });