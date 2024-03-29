import { handleAuth } from '@auth0/nextjs-auth0';
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();


export const GET = handleAuth();

