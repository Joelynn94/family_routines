import { PrismaClient, Prisma } from '@prisma/client';
import { users } from '../data/users';
import { profiles } from '../data/profiles';
import { tasks } from '../data/tasks';
import { rewards } from '../data/rewards';

const prisma = new PrismaClient();

async function main() {
  console.log('-----------------');
  console.log(`Start seeding ...`);

  await prisma.user.createMany({
    data: users,
  });

  // await prisma.profile.createMany({
  //   data: profiles,
  // });

  // await prisma.task.createMany({
  //   data: tasks,
  // });

  // await prisma.reward.createMany({
  //   data: rewards,
  // });

  console.log('-----------------');
  console.log(`Seeding finished.`);
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
