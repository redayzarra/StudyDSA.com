/*
  Warnings:

  - Added the required column `difficulty` to the `Algorithm` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `algorithm` ADD COLUMN `difficulty` VARCHAR(191) NOT NULL;
