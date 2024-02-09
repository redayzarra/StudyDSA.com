import { advancedAlgorithms, basicAlgorithms, intermediateAlgorithms } from "@/data/algoData";

const { PrismaClient } = require("@prisma/client");
const database = new PrismaClient();

const algorithms = [
  // Basic algorithms
  ...basicAlgorithms.map(algo => ({ ...algo, difficulty: "basic" })),

  // Intermediate algorithms
  ...intermediateAlgorithms.map(algo => ({ ...algo, difficulty: "intermediate" })),

  // Advanced algorithms
  ...advancedAlgorithms.map(algo => ({ ...algo, difficulty: "advanced" })),
];

async function algoSeed() {
  // Delete all existing algorithms
  await database.algorithm.deleteMany({});

  // Seed the database
  for (const algo of algorithms) {
    await database.algorithm.create({
      data: algo,
    });
  }

  console.log(`${algorithms.length} algorithms have been inserted.`);
}

algoSeed()
  .catch(e => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await database.$disconnect();
  });

// Run with: npx ts-node scripts/algoSeed.ts