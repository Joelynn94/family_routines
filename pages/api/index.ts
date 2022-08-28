import { PrismaClient } from '@prisma/client';
// 1. Import the PrismaClient constructor from the @prisma/client node module
// 2. Instantiate PrismaClient
// 3. Define an async function named main to send queries to the database
// 4. Call the main function
// 5. Close the database connections when the script terminates
// use command: npx ts-node index.ts

const prisma = new PrismaClient();

async function main() {
  // await prisma.user.create({
  //   data: {
  //     name: "Alice",
  //     email: "alice@prisma.io",
  //     posts: {
  //       create: { title: "Hello World" },
  //     },
  //     profile: {
  //       create: { bio: "I like turtles" },
  //     },
  //   },
  // });
  // const post = await prisma.post.update({
  //   where: { id: 1 },
  //   data: { published: true },
  // });
  // console.log(post);
  // const allUsers = await prisma.user.findMany({
  //   include: {
  //     posts: true,
  //     profile: true,
  //   },
  // });
  // console.dir(allUsers, { depth: null });
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
