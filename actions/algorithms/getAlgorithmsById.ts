"use server";

import db from "@/lib/db";

const getAlgorithmsById = async (ids: number[]) => {
try {
    const algorithms = await db.algorithm.findMany({
      where: {
        id: {
          in: ids,
        },
      },
    });

    return algorithms;

    // Error handling
  } catch (error) {
    console.error("Failed to fetch algorithms by ids:", error);
    throw error;
  }
}

export default getAlgorithmsById;
