import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function GET(request: Request) {
  const url = new URL(request.url);
  const topicIdString = url.searchParams.get("topicId");
  const topicId = topicIdString ? parseInt(topicIdString, 10) : NaN;

  try {
    
    // Construct the query based on topicId availability
    const query = topicId
      ? { where: { id: topicId } }
      : {}; // Empty query if topicId is null

    // Fetch the notebook based on the topicId
    const notebook = await prisma.notebook.findUnique({
      where: {
        topicId: topicId,
      },
      include: {
        entries: true
      }
    });
  
    return new Response(JSON.stringify(notebook), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (e) {
    console.error(e);
    return new Response(JSON.stringify({ error: "Unable to fetch topics" }), {
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
