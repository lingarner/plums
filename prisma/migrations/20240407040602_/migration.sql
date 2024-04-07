/*
  Warnings:

  - You are about to drop the column `notebookId` on the `NotebookEntry` table. All the data in the column will be lost.
  - You are about to drop the `Notebook` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Notebook" DROP CONSTRAINT "Notebook_topicId_fkey";

-- DropForeignKey
ALTER TABLE "NotebookEntry" DROP CONSTRAINT "NotebookEntry_notebookId_fkey";

-- AlterTable
ALTER TABLE "NotebookEntry" DROP COLUMN "notebookId",
ADD COLUMN     "topicId" INTEGER;

-- DropTable
DROP TABLE "Notebook";

-- AddForeignKey
ALTER TABLE "NotebookEntry" ADD CONSTRAINT "NotebookEntry_topicId_fkey" FOREIGN KEY ("topicId") REFERENCES "Topic"("id") ON DELETE SET NULL ON UPDATE CASCADE;
