import { prisma } from "@/db";
import Image from "next/image";

async function getTop10Posts() {
  return await prisma.names.findMany({ take: 10 });
}

export default async function Home() {
  const names = await getTop10Posts();

  return (
    <div>
      <div>{names.length === 0 ? "No entry yet" : "Top 10 posts"}</div>

      <div>
        {names?.map((name, index) => (
          <div key={index}>{`${name.name} -> ${name.meaning}`}</div>
        ))}
      </div>
    </div>
  );
}
