import { prisma } from "@/db";
import React from "react";

async function getAllNames() {
  return await prisma.names.findMany();
}

async function AllPosts() {
  const names = await getAllNames();
  return (
    <div>
      <div>{names.length === 0 ? "No entry yet" : "All Names here"}</div>
      <div>
        {names?.map((name, index) => (
          <div key={index}>{`${name.name} -> ${name.meaning}`}</div>
        ))}
      </div>
    </div>
  );
}

export default AllPosts;
