import db from "@/lib/db";

const getAlgoProgress = async (userId: string) => {
try {
    const totalAlgorithms = await db.algorithm.count();

    const completedAlgorithms = await db.algorithmProgress.count({
      where: {
        userId: userId,
        isComplete: true,
      },
    });

    return [completedAlgorithms, totalAlgorithms];

    // Error handling
  } catch (error) {
    console.error("Error fetching algorithm progress:", error);
    throw error;
  }
};

export default getAlgoProgress;