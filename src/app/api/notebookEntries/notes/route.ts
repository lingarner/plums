import prisma from "../../../../../prisma/prismaClient";

export async function GET(request: Request) {
  const url = new URL(request.url);
  const topicId = Number(url.searchParams.get("topicId"));
  
  try {
    const attachments = await prisma.notebookEntry.findMany({
      where: {
        topicId: topicId,
      },
    });

    return new Response(JSON.stringify(attachments), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (e) {
    console.error(e);
    return new Response(JSON.stringify({ error: "Unable to fetch attachments" }), {
      status: 500,
      headers: {
        "Content-Type": "application/json",
      },
    });
  }
}
