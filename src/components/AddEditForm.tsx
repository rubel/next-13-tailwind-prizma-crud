"use client";
import { useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";

function AddEditForm({ saveNewName, updateExistingName, getNameById }: any) {
  const [nameOfAllah, setNameOfAllah] = useState(null);
  const id = useSearchParams().get("id");

  const getNameFromId = async () => {
    const theName = await getNameById(id);
    setNameOfAllah(theName);
  };

  const formUpdated = (e) => {
    if (e.target.name === "name") {
      setNameOfAllah({ ...nameOfAllah, name: e.target.value });
    } else if (e.target.name === "meaning") {
      setNameOfAllah({ ...nameOfAllah, meaning: e.target.value });
    }
  };

  useEffect(() => {
    if (id) {
      getNameFromId();
    }
  }, [id]);

  return (
    <form action={id ? updateExistingName : saveNewName} className="grid gap-2">
      <div>
        {id && (
          <input
            className="text-slate-800 rounded-sm"
            name="id"
            type="hidden"
            value={id}
            onChange={formUpdated}
          />
        )}
        <label className="inline-block w-20">Name</label>
        <input
          className="text-slate-800 rounded-sm"
          name="name"
          type="text"
          value={nameOfAllah?.name}
          onChange={formUpdated}
        />
      </div>

      <div>
        <label className="inline-block w-20">Meaning</label>
        <input
          className="text-slate-800 rounded-sm"
          name="meaning"
          type="text"
          value={nameOfAllah?.meaning}
          onChange={formUpdated}
        />
      </div>

      <div>
        <button
          className="border border-slate-300 text-slate-300 px-2 py-1 rounded hover: bg-slate-700 focus-within:bg-slate-700 outline-none"
          type="submit"
        >
          {id ? "Update" : "Add"}
        </button>
      </div>
    </form>
  );
}

export default AddEditForm;
