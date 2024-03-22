import { PrismaClient } from "@prisma/client";


const prisma = new PrismaClient();

async function main() {
    const topic = await prisma.topic.create({
        data: {
            name: "My Topic",
        },
    });

}

main()
    .then(async () => {
        await prisma.$disconnect();
    })
    .catch(async (e) => {
        console.error(e);
        await prisma.$disconnect();
        process.exit(1);
    })