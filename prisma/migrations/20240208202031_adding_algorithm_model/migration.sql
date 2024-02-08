/*
  Warnings:

  - You are about to drop the column `value` on the `chapter` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE `chapter` DROP FOREIGN KEY `Chapter_topicId_fkey`;

-- DropForeignKey
ALTER TABLE `userprogress` DROP FOREIGN KEY `UserProgress_chapterId_fkey`;

-- DropForeignKey
ALTER TABLE `userprogress` DROP FOREIGN KEY `UserProgress_userId_fkey`;

-- AlterTable
ALTER TABLE `chapter` DROP COLUMN `value`;

-- CreateTable
CREATE TABLE `TopicProgress` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `userId` VARCHAR(191) NOT NULL,
    `topicId` VARCHAR(191) NOT NULL,
    `isComplete` BOOLEAN NOT NULL DEFAULT false,

    UNIQUE INDEX `TopicProgress_userId_topicId_key`(`userId`, `topicId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Algorithm` (
    `id` VARCHAR(191) NOT NULL,
    `title` VARCHAR(191) NOT NULL,
    `description` VARCHAR(191) NOT NULL,
    `href` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `AlgorithmProgress` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `userId` VARCHAR(191) NOT NULL,
    `algorithmId` VARCHAR(191) NOT NULL,
    `isComplete` BOOLEAN NOT NULL DEFAULT false,

    UNIQUE INDEX `AlgorithmProgress_userId_algorithmId_key`(`userId`, `algorithmId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `TopicProgress` ADD CONSTRAINT `TopicProgress_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `TopicProgress` ADD CONSTRAINT `TopicProgress_topicId_fkey` FOREIGN KEY (`topicId`) REFERENCES `Topic`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Chapter` ADD CONSTRAINT `Chapter_topicId_fkey` FOREIGN KEY (`topicId`) REFERENCES `Topic`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `AlgorithmProgress` ADD CONSTRAINT `AlgorithmProgress_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `AlgorithmProgress` ADD CONSTRAINT `AlgorithmProgress_algorithmId_fkey` FOREIGN KEY (`algorithmId`) REFERENCES `Algorithm`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `UserProgress` ADD CONSTRAINT `UserProgress_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `UserProgress` ADD CONSTRAINT `UserProgress_chapterId_fkey` FOREIGN KEY (`chapterId`) REFERENCES `Chapter`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
