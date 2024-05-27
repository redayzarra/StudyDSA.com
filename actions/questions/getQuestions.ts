"use server";

import db from "@/lib/db";
import { LeetCodeProblem } from "@prisma/client";

export const questionsCache: { [key: string]: LeetCodeProblem } = {}; // Initialize the hashmap

const getQuestions = async (names: string[]) => {
  // Check if the hashmap is empty
  if (Object.keys(questionsCache).length === 0) {
    try {
      // Fetch all questions and populate the hashmap
      const allQuestions = await db.leetCodeProblem.findMany();
      allQuestions.forEach(question => {
        questionsCache[question.title] = question;
      });

      // Error handling
    } catch (error) {
      console.error("Failed to fetch questions:", error);
      throw error;
    }
  }

  // Retrieve the requested questions from the hashmap
  const questions = names.map(name => questionsCache[name]).filter(Boolean);

  return questions;
};

export default getQuestions;
