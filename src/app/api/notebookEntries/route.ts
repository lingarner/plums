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


export async function PUT(request: Request) {
  try {
    const { id, content } = await request.json();
    const numId = parseInt(id, 10);
    console.log(numId)
    const updatedEntry = await prisma.notebookEntry.update({
      where: {
        id: numId,
      },
      data: {
        content: content,
      },
    });
    return new Response(JSON.stringify(updatedEntry), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (e) {
    console.error("error here" + e);
    return new Response(JSON.stringify({ error: "Unable to update entry" }), {
      status: 500,
    });
  }
}

export async function DELETE(request: Request) {
  try {
    const { id } = await request.json();
    const deletedEntry = await prisma.notebookEntry.delete({
      where: {
        id: id,
      },
    });
    return new Response(JSON.stringify(deletedEntry), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (e) {
    console.error("error here" + e);
    return new Response(JSON.stringify({ error: "Unable to delete Entry" }), {
      status: 500,
      headers: {
        "Content-Type": "application/json",
      },
    });
  }
}
