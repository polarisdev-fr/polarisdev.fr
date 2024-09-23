/*
  Warnings:

  - The `priority` column on the `SupportTicket` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "SupportTicket" DROP COLUMN "priority",
ADD COLUMN     "priority" TEXT NOT NULL DEFAULT 'LOW';

-- DropEnum
DROP TYPE "Priority";
