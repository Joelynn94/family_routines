import { PrismaClient, Prisma } from '@prisma/client';
import { users } from '../data/users';
import { profiles } from '../data/profiles';

const prisma = new PrismaClient();

async function main() {
  console.log('-----------------');
  console.log(`Start seeding ...`);

  await prisma.user.createMany({
    data: users,
  });

  await prisma.profile.createMany({
    data: profiles,
  });

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
