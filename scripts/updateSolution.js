const { PrismaClient } = require('@prisma/client');
const database = new PrismaClient();

// This would be your hashmap of problem titles and solutions
const problemSolutions = {
  "Contains Duplicate": `class Solution:
    def containsDuplicate(self, nums: List[int]) -> bool:
        seen = set()
        for num in nums:
            if num in seen:
                return True
            seen.add(num)
        return False

        # Time: O(n), Space: O(n)`,
};

async function updateSolution() {
  console.log("Starting to update LeetCode problem solutions...");

  for (const [title, solution] of Object.entries(problemSolutions)) {
    try {
      const updatedProblem = await database.leetCodeProblem.update({
        where: { title },
        data: { solution },
      });

      console.log(`Updated solution for problem: ${updatedProblem.title}`);
    } catch (error) {
      console.error(`Failed to update solution for problem "${title}":`, error.message);
    }
  }

  console.log("Finished updating LeetCode problem solutions.");
}

updateSolution()
  .catch((error) => {
    console.error("Error in seed script:", error);
    process.exit(1);
  })
  .finally(async () => {
    await database.$disconnect();
  });