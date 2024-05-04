-- CreateTable
CREATE TABLE `ProblemTag` (
    `id` VARCHAR(191) NOT NULL,
    `tag` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `ProblemTag_tag_key`(`tag`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `LeetCodeProblem` (
    `id` VARCHAR(191) NOT NULL,
    `title` VARCHAR(191) NOT NULL,
    `problemDescription` VARCHAR(191) NOT NULL,
    `difficulty` ENUM('Easy', 'Medium', 'Hard') NOT NULL,
    `completed` BOOLEAN NOT NULL DEFAULT false,
    `masteryLevel` ENUM('Practicing', 'Mastered', 'Review', 'Challenging') NULL,
    `personalNotes` VARCHAR(191) NULL,
    `favorite` BOOLEAN NOT NULL DEFAULT false,
    `videoURL` VARCHAR(191) NULL,
    `userId` VARCHAR(191) NOT NULL,

    INDEX `idx_leetcodeproblem_user`(`userId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `_LeetCodeProblemToProblemTag` (
    `A` VARCHAR(191) NOT NULL,
    `B` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `_LeetCodeProblemToProblemTag_AB_unique`(`A`, `B`),
    INDEX `_LeetCodeProblemToProblemTag_B_index`(`B`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `LeetCodeProblem` ADD CONSTRAINT `LeetCodeProblem_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_LeetCodeProblemToProblemTag` ADD CONSTRAINT `_LeetCodeProblemToProblemTag_A_fkey` FOREIGN KEY (`A`) REFERENCES `LeetCodeProblem`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_LeetCodeProblemToProblemTag` ADD CONSTRAINT `_LeetCodeProblemToProblemTag_B_fkey` FOREIGN KEY (`B`) REFERENCES `ProblemTag`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
