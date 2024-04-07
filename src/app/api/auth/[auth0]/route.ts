import { handleAuth } from '@auth0/nextjs-auth0';
import prisma from "../../../../../prisma/prismaClient";


export const GET = handleAuth();

