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

    // Extract data from form fields
    const name = formData.get("name") as string;
    const topicId = Number(formData.get("topicId"));
    const attachmentData = formData.get("attachmentData") as Blob;
    const comments = formData.get("comments") as string;

    // Read attachmentData
    const fileData = Buffer.from(await attachmentData.arrayBuffer());

    // Save attachment data to the database
    const newAttachment = await prisma.attachment.create({
      data: {
        name,
        pinned: false, 
        attachmentData: fileData,
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

// PUT route to update an existing attachment
export async function PUT(request: Request) {
  try {
    const formData = await request.formData();

    // Extract data from form fields
    const id = Number(formData.get("id"));
    const name = formData.get("name") as string;
    const comments = formData.get("comments") as string;
    const attachmentData = formData.get("attachmentData") as Blob;


    const fileData = Buffer.from(await attachmentData.arrayBuffer());

  
    const updatedAttachment = await prisma.attachment.update({
      where: { id },
      data: {
        name,
        comments: comments, 
        attachmentData: fileData,
      },
    });

    return new Response(JSON.stringify(updatedAttachment), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (e) {
    console.error("Error updating attachment: " + e);
    return new Response(JSON.stringify({ error: "Unable to update attachment" }), {
      status: 500,
      headers: {
        "Content-Type": "application/json",
      },
    });
  }
}

// DELETE route to delete an attachment
export async function DELETE(request: Request) {
  try {
    const formData = await request.formData();

    // Extract attachment ID
    const id = Number(formData.get("id"));

    // Delete attachment from the database
    await prisma.attachment.delete({
      where: { id },
    });

    return new Response(JSON.stringify({ message: "Attachment deleted successfully" }), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (e) {
    console.error("Error deleting attachment: " + e);
    return new Response(JSON.stringify({ error: "Unable to delete attachment" }), {
      status: 500,
      headers: {
        "Content-Type": "application/json",
      },
    });
  }
}
