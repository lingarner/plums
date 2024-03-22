-- CreateTable
CREATE TABLE "Tag" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Tag_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "TagsOnTopic" (
    "topicId" INTEGER NOT NULL,
    "tagId" INTEGER NOT NULL,

    CONSTRAINT "TagsOnTopic_pkey" PRIMARY KEY ("tagId","topicId")
);

-- AddForeignKey
ALTER TABLE "TagsOnTopic" ADD CONSTRAINT "TagsOnTopic_topicId_fkey" FOREIGN KEY ("topicId") REFERENCES "Topic"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TagsOnTopic" ADD CONSTRAINT "TagsOnTopic_tagId_fkey" FOREIGN KEY ("tagId") REFERENCES "Tag"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
