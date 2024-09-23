-- CreateEnum
CREATE TYPE "SupportPriority" AS ENUM ('LOW', 'MEDIUM', 'HIGH');

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "mobilePhone" TEXT,
ADD COLUMN     "supportPriority" "SupportPriority" NOT NULL DEFAULT 'LOW';
