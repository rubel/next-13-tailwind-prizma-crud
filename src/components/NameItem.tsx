"use client";
import { useRouter } from "next/navigation";
import React from "react";

type NameItem = {
  id: string;
  name: string;
  meaning: string;
};

function NameItem({ id, name, meaning }: NameItem) {
  const router = useRouter();
  const editPressed = () => {
    router.push(`/new?id=${id}`);
  };
  return (
    <div>
      {`${name} -> ${meaning}`}{" "}
      <span
        className="ml-5 cursor-pointer border border-rose-100 rounded-sm px-2"
        onClick={() => {
          editPressed();
        }}
      >
        Edit
      </span>
    </div>
  );
}

export default NameItem;
