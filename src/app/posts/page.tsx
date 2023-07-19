import NameItem from "@/components/NameItem";
import { prisma } from "@/db";
import { redirect } from "next/navigation";
import React, { useEffect, useState } from "react";

async function getAllNames() {
  "use server";
  return await prisma.names.findMany();
}

async function AllPosts() {
  const names = await getAllNames();

  return (
    <div>
      <div>{names.length === 0 ? "No entry yet" : "All Names here"}</div>
      <div>
        {names?.map((name, index) => (
          <NameItem {...name} key={index} />
        ))}
      </div>
    </div>
  );
}

export default AllPosts;
