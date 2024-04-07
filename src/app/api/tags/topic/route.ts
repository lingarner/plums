import prisma from "../../../../../prisma/prismaClient";

export async function GET(request: Request): Promise<Response> {
  const url = new URL(request.url);
  const userId = url.searchParams.get("userId");

  try {
    // Fetch tags that have associated topics
    const tagsWithTopics = await prisma.tag.findMany({
      where: {
        userId: userId,
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
