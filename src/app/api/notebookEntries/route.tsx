import { PrismaClient } from "@prisma/client";
import { NextApiRequest, NextApiResponse } from 'next';

const prisma = new PrismaClient();

// GET request handler for retrieving notebook entries
export default async function handler(request: Request) {
  try {
    // Retrieve notebook entries from the database
    const notebookEntries = await prisma.notebookEntry.findMany({
      // You can add any additional filtering or sorting options here
    });

    // Return the retrieved notebook entries as JSON response
    return new Response(JSON.stringify(notebookEntries),{
      status: 200,
      headers: {
        "Content-Type": "application/json",
      },

    })
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
