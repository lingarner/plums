import prisma from "../../../../prisma/prismaClient";

export async function GET(request: Request): Promise<Response> {
  const url = new URL(request.url);
  const topicId = Number(url.searchParams.get("topicId"));
  const userId = url.searchParams.get("userId");
  
  try {
    const tags = await prisma.tagsOnTopic.findMany({
      where: {
        topicId: topicId,
        userId,
      },
      include: {
        tag: true,
      },
    });

    // Extract tag names and tag IDs from the response
    const tagNamesAndIds = tags.map((tag: any) => ({
      name: tag.tag.name,
      id: tag.tagId
    }));

    return new Response(JSON.stringify(tagNamesAndIds), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (e) {
    console.error(e);
    return new Response(JSON.stringify({ error: "Unable to fetch tags" }), {
      status: 500,
      headers: {
        "Content-Type": "application/json",
      },
    });
  }
}



// POST route to create a new tag for a topic
export async function POST(request: Request): Promise<Response> {
  try {
    const { topicId, tagName, userId } = await request.json();

    let existingTag = await prisma.tag.findFirst({
      where: {
        name: tagName,
        userId: userId,
      },
    });

   

    if (!existingTag) {
      existingTag = await prisma.tag.create({
        data: {
          name: tagName,
          userId
        },
      });
    }

    const existingTagOnTopic = await prisma.tagsOnTopic.findFirst({
      where: {
        topicId,
        userId,
        tagId: existingTag.id,
      },
    });

    if (!existingTagOnTopic) {
      await prisma.tagsOnTopic.create({
        data: {
          topicId,
          userId,
          tagId: existingTag.id,
        },
      });
    }

    return new Response(JSON.stringify(existingTag), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (e) {
    console.error("Error creating tag: " + e);
    return new Response(JSON.stringify({ error: "Unable to create tag" }), {
      status: 500,
      headers: {
        "Content-Type": "application/json",
      },
    });
  }
}


// DELETE route to remove a tag from a topic
export async function DELETE(request: Request): Promise<Response> {
  try {
    const { topicId, tagId } = await request.json();

    const deletedTagOnTopic = await prisma.tagsOnTopic.deleteMany({
      where: {
        topicId,
        tagId,
      },
    });

    return new Response(JSON.stringify(deletedTagOnTopic), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (e) {
    console.error("Error deleting tag: " + e);
    return new Response(JSON.stringify({ error: "Unable to delete tag" }), {
      status: 500,
      headers: {
        "Content-Type": "application/json",
      },
    });
  }
}
