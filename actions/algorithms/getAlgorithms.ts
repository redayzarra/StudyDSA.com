"use server"

import db from "@/lib/db";
import { Difficulty } from "@prisma/client"

const getAlgorithms = async (difficulty?: Difficulty) => {
  try {
    const algorithms = await db.algorithm.findMany({
      where: {
        difficulty: difficulty ?  difficulty  : {},
      },
    });

    return algorithms;

    // Error handling
  } catch (error) {
    console.error("Failed to fetch algorithms:", error);
    throw error;
  }
}

export default getAlgorithms;
