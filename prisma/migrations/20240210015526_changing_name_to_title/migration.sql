/*
  Warnings:

  - You are about to drop the column `name` on the `chapter` table. All the data in the column will be lost.
  - You are about to drop the column `name` on the `topic` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[title]` on the table `Topic` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `title` to the `Chapter` table without a default value. This is not possible if the table is not empty.
  - Added the required column `title` to the `Topic` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX `Topic_name_key` ON `topic`;

-- AlterTable
ALTER TABLE `chapter` DROP COLUMN `name`,
    ADD COLUMN `title` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `topic` DROP COLUMN `name`,
    ADD COLUMN `title` VARCHAR(191) NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX `Topic_title_key` ON `Topic`(`title`);
