import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-8 p-24">
      <h1 className="text-2xl">Welcome to your Next.js app!</h1>
      <Image
        src="/nextjs-flyio2.png"
        alt="Next.js Logo"
        width={800}
        height={37}
        priority
      />
    </main>
  );
}

import pg from "pg";
const { Client } = pg;
const client = new Client({connectionString: process.env.DATABASE_URL})
await client.connect()
const res = await client.query('SELECT $1::text as message', ['Hello world!'])
console.log(res.rows[0].message) // Hello world!
await client.end()
