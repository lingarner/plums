import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function GET(request: Request) {
    const url = new URL(request.url);
    const urlId = url.searchParams.get("urlId");
    
    const urlIdNumber = parseInt(urlId ?? "", 10);

    if (!urlIdNumber || isNaN(urlIdNumber)) {
            return new Response(JSON.stringify({ error: "Topic ID is required and must be a number" }), {
                status: 400,
                headers: {
                    "Content-Type": "application/json",
                },
            });
    }

    try {
        const link = await prisma.url.findUnique({
            where: {
                id: urlIdNumber,
            }
        });
        
        return new Response(JSON.stringify(link), {
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
      const updatedurl = await prisma.url.update({
        where: {
          id: id,
        },
        data: {
          comments: comments,
        },
      });
      return new Response(JSON.stringify(updatedurl), {
        status: 200,
        headers: {
          "Content-Type": "application/json",
        },
      });
    } catch (e) {
      console.error("error here" + e);
      return new Response(JSON.stringify({ error: "Unable to update url" }), {
        status: 500,
      });
    }
  }