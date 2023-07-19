import AddEditForm from "@/components/AddEditForm";
import { prisma } from "@/db";
import { redirect } from "next/navigation";
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

  redirect("/");
}

async function updateExistingName(data: FormData) {
  "use server";
  const id = data.get("id")?.valueOf();
  const name = data.get("name")?.valueOf();
  const meaning = data.get("meaning")?.valueOf();

  const ob = {
    where: {
      id,
    },
    data: {
      name,
      meaning,
    },
  };
  await prisma.names.update(JSON.parse(JSON.stringify(ob)));

  redirect("/");
}

async function getNameById(id: string) {
  "use server";
  const ob = {
    where: {
      id,
    },
  };
  return prisma.names.findUnique(JSON.parse(JSON.stringify(ob)));
}

function NewPost() {
  return (
    <div>
      <div className="mb-4">Add new name</div>
      <AddEditForm
        updateExistingName={updateExistingName}
        saveNewName={saveNewName}
        getNameById={getNameById}
      />
    </div>
  );
}

export default NewPost;
