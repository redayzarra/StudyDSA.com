/*
  Warnings:

  - You are about to drop the column `personalNotes` on the `leetcodeproblem` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `leetcodeproblem` DROP COLUMN `personalNotes`,
    ADD COLUMN `notes` VARCHAR(191) NULL;

-- AlterTable
ALTER TABLE `problemprogress` ADD COLUMN `notes` VARCHAR(191) NULL;
