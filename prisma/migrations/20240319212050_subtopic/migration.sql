/*
  Warnings:

  - You are about to drop the `Link` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `LinkTopic` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Subtopic` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "LinkTopic" DROP CONSTRAINT "LinkTopic_linkId_fkey";

-- DropForeignKey
ALTER TABLE "LinkTopic" DROP CONSTRAINT "LinkTopic_subtopicId_fkey";

-- DropForeignKey
ALTER TABLE "LinkTopic" DROP CONSTRAINT "LinkTopic_topicId_fkey";

-- DropForeignKey
ALTER TABLE "Subtopic" DROP CONSTRAINT "Subtopic_topicId_fkey";

-- AlterTable
ALTER TABLE "Topic" ADD COLUMN     "parent_id" INTEGER;

-- DropTable
DROP TABLE "Link";

-- DropTable
DROP TABLE "LinkTopic";

-- DropTable
DROP TABLE "Subtopic";

-- AddForeignKey
ALTER TABLE "Topic" ADD CONSTRAINT "Topic_parent_id_fkey" FOREIGN KEY ("parent_id") REFERENCES "Topic"("id") ON DELETE SET NULL ON UPDATE CASCADE;
