"use server";

import db from "@/lib/db";

const getAlgorithmStatus = async (userId: string, algorithmId: string) => {
  const progress = await db.algorithmProgress.findUnique({
    where: {
      userId_algorithmId: {
        userId,
        algorithmId,
      },
    },
  });

  return progress ? progress.isComplete : false;
};

export default getAlgorithmStatus;