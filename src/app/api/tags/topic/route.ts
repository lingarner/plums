import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function GET(request: Request): Promise<Response> {
  try {
    // Fetch tags that have associated topics
    const tagsWithTopics = await prisma.tag.findMany({
      where: {
        topics: {
          some: {} // Filter to only include tags with at least one associated topic
        }
      },
      include: {
        topics: {
          include: {
            topic: true,
          },
        },
      },
    });

    // Return the tags with associated topics in the response
    return new Response(JSON.stringify(tagsWithTopics), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (e) {
    console.error(e);
    return new Response(JSON.stringify({ error: "Unable to fetch tags and topics" }), {
      status: 500,
      headers: {
        "Content-Type": "application/json",
      },
    });
  }
}
