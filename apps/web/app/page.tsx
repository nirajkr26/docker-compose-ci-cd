import Image, { type ImageProps } from "next/image";
import { Button } from "@repo/ui/button";
import styles from "./page.module.css";
import { prisma } from "@packages/db";


export default async function Home() {
  const users = await prisma.user.findMany();
  return (
    <div>
      {JSON.stringify(users)}
    </div>
  );
}

// export const revalidate = 60 // revalidate every 60 seconds

//export const dynamic = 'force-dynamic'