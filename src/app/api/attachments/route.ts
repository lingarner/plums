import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

// GET route to retrieve attachments by topicId
export async function GET(request: Request) {
  const url = new URL(request.url);
  const topicId = Number(url.searchParams.get("topicId"));
  
  try {
    const attachments = await prisma.attachment.findMany({
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

// POST route to create a new attachment
export async function POST(request: Request) {
  try {
    const formData = await request.formData();

   
    const name = formData.get("name") as string;
    const topicId = Number(formData.get("topicId"));
    const attachmentData = formData.get("attachmentData") as Blob;
    const comments = formData.get("comments") as string;
    const type = formData.get("type") as string;

    
    const fileData = Buffer.from(await attachmentData.arrayBuffer());

    
    const newAttachment = await prisma.attachment.create({
      data: {
        name,
        pinned: false, 
        attachmentData: fileData,
        attachmentType: type,
        comments: comments,
        topic: {
          connect: {
            id: topicId,
          },
        },
      },
    });

    return new Response(JSON.stringify(newAttachment), {
      status: 201,
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (e) {
    console.error("Error creating attachment: " + e);
    return new Response(JSON.stringify({ error: "Unable to create attachment" }), {
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
    const updatedAttachment = await prisma.attachment.update({
      where: {
        id: id,
      },
      data: {
        pinned: pinned,
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
    return new Response(JSON.stringify({ error: "Unable to update topic" }), {
      status: 500,
    });
  }
}

// DELETE route to delete an attachment
export async function DELETE(request: Request) {
  try {
    const { id } = await request.json();
    const deletedTopic = await prisma.attachment.delete({
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
