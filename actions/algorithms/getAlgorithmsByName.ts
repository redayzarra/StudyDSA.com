"use server";

import db from "@/lib/db";
import { Algorithm } from "@prisma/client";

const algorithmCache: { [key: string]: Algorithm } = {}; // Initialize the hashmap

const getAlgorithmsByName = async (names: string[]) => {
  // Check if the hashmap is empty
  if (Object.keys(algorithmCache).length === 0) {
    try {
      // Fetch all algorithms and populate the hashmap
      const allAlgorithms = await db.algorithm.findMany();
      allAlgorithms.forEach(algorithm => {
        algorithmCache[algorithm.title] = algorithm;
      });
    } catch (error) {
      console.error("Failed to fetch algorithms:", error);
      throw error;
    }
  }

  // Retrieve the requested algorithms from the hashmap
  const algorithms = names.map(name => algorithmCache[name]).filter(Boolean);

  return algorithms;
};

export default getAlgorithmsByName;
