import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function GET(request: Request) {
  const url = new URL(request.url);
  const parentId = Number(url.searchParams.get("parentId"));
  const userId = url.searchParams.get("userId");

  try {
 
    const topics = await prisma.topic.findMany({
      where: {
        parentId: parentId,
        userId
      },
    });

    // Return the found topics in the response
    return new Response(JSON.stringify(topics), {
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
    const { name, parentId } = await request.json();

    const newTopic = await prisma.topic.create({
      data: {
        name,
        parentId: Number(parentId),
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