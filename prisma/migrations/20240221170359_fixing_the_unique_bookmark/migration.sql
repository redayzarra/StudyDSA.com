/*
  Warnings:

  - You are about to drop the column `createdAt` on the `bookmark` table. All the data in the column will be lost.

*/

-- AlterTable
ALTER TABLE `bookmark` DROP COLUMN `createdAt`;

-- CreateIndex
CREATE INDEX `idx_bookmark_chapter` ON `Bookmark`(`chapterId`);

-- CreateIndex
CREATE INDEX `idx_bookmark_algorithm` ON `Bookmark`(`algorithmId`);
