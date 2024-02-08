/*
  Warnings:

  - You are about to alter the column `difficulty` on the `algorithm` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `Enum(EnumId(1))`.

*/
-- AlterTable
ALTER TABLE `algorithm` MODIFY `difficulty` ENUM('basic', 'intermediate', 'advanced') NOT NULL;
