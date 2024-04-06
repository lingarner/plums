import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function GET(request: Request) {
  const url = new URL(request.url);
  const entryIdString = url.searchParams.get("entryId");
  const entryId = entryIdString ? parseInt(entryIdString, 10) : NaN;

  try {
    // Fetch the notebook based on the topicId
    const notebookEntry = await prisma.notebookEntry.findUnique({
      where: {
        id: entryId,
      }
    });
  
    return new Response(JSON.stringify(notebookEntry), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (e) {
    console.error(e);
    return new Response(JSON.stringify({ error: "Unable to fetch entry" }), {
      status: 500,
      headers: {
        "Content-Type": "application/json",
      },
    });
  }
}


export async function POST(request: Request) {
  try {
    const { name, userId } = await request.json();
    const newTopic = await prisma.topic.create({
      data: {
        name,
        userId
      },
    });
    return new Response(JSON.stringify(newTopic), {
      status: 201,
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (e) {
    console.error("error here" + e);
    return new Response(JSON.stringify({ error: "Unable to create topic" }), {
      status: 500,
      headers: {
        "Content-Type": "application/json",
      },
    });
  }
}
export async function PUT(request: Request) {
  try {
    const { id, pinned } = await request.json();
    const updatedTopic = await prisma.topic.update({
      where: {
        id: id,
      },
      data: {
        pinned: pinned,
      },
    });
    return new Response(JSON.stringify(updatedTopic), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (e) {
    console.error("error here" + e);
    return new Response(JSON.stringify({ error: "Unable to update topic" }), {
      status: 500,
    });
  }
}

export async function DELETE(request: Request) {
  try {
    const { id } = await request.json();
    const deletedTopic = await prisma.topic.delete({
      where: {
        id: id,
      },
    });
    return new Response(JSON.stringify(deletedTopic), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (e) {
    console.error("error here" + e);
    return new Response(JSON.stringify({ error: "Unable to delete topic" }), {
      status: 500,
      headers: {
        "Content-Type": "application/json",
      },
    });
  }
}
