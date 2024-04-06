import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function GET(request: Request) {
    const url = new URL(request.url);
    const topicId = url.searchParams.get("topicId");
    
    const topicIdNumber = parseInt(topicId ?? "", 10);

    if (!topicIdNumber || isNaN(topicIdNumber)) {
            return new Response(JSON.stringify({ error: "Topic ID is required and must be a number" }), {
                status: 400,
                headers: {
                    "Content-Type": "application/json",
                },
            });
    }

    try {
        const topic = await prisma.topic.findUnique({
            where: {
                id: topicIdNumber,
            }
        });
        
        return new Response(JSON.stringify(topic), {
            status: 200,
            headers: {
                "Content-Type": "application/json",
            },
        });
    } catch (e) {
        console.error(e);
        return new Response(JSON.stringify({ error: "Unable to fetch topic" }), {
            status: 500,
            headers: {
                "Content-Type": "application/json",
            },
        });
    }
}

export async function PUT(request: Request) {
    try {
      const { id, comments } = await request.json();
      const updatedAttachment = await prisma.attachment.update({
        where: {
          id: id,
        },
        data: {
          comments: comments,
        },
      });
      return new Response(JSON.stringify(updatedAttachment), {
        status: 200,
        headers: {
          "Content-Type": "application/json",
        },
      });
    } catch (e) {
      console.error("error here" + e);
      return new Response(JSON.stringify({ error: "Unable to update attachment" }), {
        status: 500,
      });
    }
  }