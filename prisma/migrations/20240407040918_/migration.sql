/*
  Warnings:

  - Made the column `topicId` on table `NotebookEntry` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE "NotebookEntry" DROP CONSTRAINT "NotebookEntry_topicId_fkey";

-- AlterTable
ALTER TABLE "NotebookEntry" ALTER COLUMN "topicId" SET NOT NULL;

-- AddForeignKey
ALTER TABLE "NotebookEntry" ADD CONSTRAINT "NotebookEntry_topicId_fkey" FOREIGN KEY ("topicId") REFERENCES "Topic"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
