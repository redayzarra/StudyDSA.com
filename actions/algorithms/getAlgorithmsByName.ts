"use server";

import db from "@/lib/db";

const getAlgorithmsByName = async (names: string[]) => {
try {
    const algorithms = await db.algorithm.findMany({
      where: {
        title: {
          in: names,
        },
      },
    });

    return algorithms;

    // Error handling
  } catch (error) {
    console.error("Failed to fetch algorithms by names:", error);
    throw error;
  }
}

export default getAlgorithmsByName;