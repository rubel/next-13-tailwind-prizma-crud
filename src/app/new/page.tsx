import { prisma } from "@/db";
import { redirect } from "next/dist/server/api-utils";
import React from "react";

async function saveNewName(data: FormData) {
  "use server";
  const name = data.get("name")?.valueOf();
  const meaning = data.get("meaning")?.valueOf();

  const ob = {
    data: {
      name,
      meaning,
    },
  };
  await prisma.names.create(JSON.parse(JSON.stringify(ob)));

  redirect("/posts");
}

function NewPost() {
  return (
    <div>
      <div className="mb-4">Add new name</div>
      <form action={saveNewName} className="grid gap-2">
        <div>
          <label className="inline-block w-20">Name</label>
          <input
            className="text-slate-800 rounded-sm"
            name="name"
            type="text"
          />
        </div>

        <div>
          <label className="inline-block w-20">Meaning</label>
          <input
            className="text-slate-800 rounded-sm"
            name="meaning"
            type="text"
          />
        </div>

        <div>
          <button
            className="border border-slate-300 text-slate-300 px-2 py-1 rounded hover: bg-slate-700 focus-within:bg-slate-700 outline-none"
            type="submit"
          >
            Add
          </button>
        </div>
      </form>
    </div>
  );
}

export default NewPost;
