/*
  Warnings:

  - You are about to drop the column `description` on the `Topic` table. All the data in the column will be lost.
  - Added the required column `attachmentData` to the `Attachment` table without a default value. This is not possible if the table is not empty.
  - Added the required column `pinned` to the `Attachment` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Attachment" ADD COLUMN     "attachmentData" BYTEA NOT NULL,
ADD COLUMN     "comments" TEXT,
ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "pinned" BOOLEAN NOT NULL,
ALTER COLUMN "url" DROP NOT NULL;

-- AlterTable
ALTER TABLE "Topic" DROP COLUMN "description";
