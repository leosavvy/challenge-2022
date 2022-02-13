-- CreateTable
CREATE TABLE `Employee` (
    `employeeId` VARCHAR(191) NOT NULL,
    `department` VARCHAR(191) NOT NULL,
    `salary` INTEGER NOT NULL,

    UNIQUE INDEX `Employee_department_key`(`department`),
    PRIMARY KEY (`employeeId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
