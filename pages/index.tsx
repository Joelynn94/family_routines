import type { NextPage, GetStaticProps, GetServerSideProps } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
// pages/index.tsx
import prisma from '../lib/prisma';

export type UserProps = {
  id: string;
  name: string;
  email: boolean;
  emailVerified: Date;
  image: string;
  createdAt: Date;
  updatedAt: Date;
  profile: {
    id: string;
    bio: string;
    userId: string;
  } | null;
};

// index.tsx
export const getStaticProps: GetStaticProps = async () => {
  try {
    const dbUsers = await prisma.user.findMany({
      include: {
        profile: {
          select: { bio: true },
        },
      },
    });
    console.log(dbUsers);

    const users = dbUsers.map((user) => {
      user.emailVerified = JSON.parse(JSON.stringify(user?.emailVerified));
      user.createdAt = JSON.parse(JSON.stringify(user?.createdAt));
      user.updatedAt = JSON.parse(JSON.stringify(user?.updatedAt));

      return user;
    });

    console.log(users);
    return {
      props: { users },
      revalidate: 10,
    };
  } catch (error) {
    console.error(error);
    throw error;
  }
};

const Home = (users: UserProps[]) => {
  console.log(users);
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className="text-3xl font-bold underline">Hello from Family Routines!</h1>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  );
};

export default Home;
