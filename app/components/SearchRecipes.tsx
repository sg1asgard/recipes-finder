import type { ActionFunction } from "@remix-run/node";
import { json, redirect } from "@remix-run/node";
import { Form } from "@remix-run/react";
import React, { useState } from "react";

export const action: ActionFunction = async ({ request }) => {
  const formData = await request.formData();
  const recipeTitle = formData.get("newSearch");

  console.log("searched for:", recipeTitle);

  return json({success: true, searchedFor: recipeTitle});
};

export default function SearchRecipes({
  className,
}: React.ComponentProps<"input">) {
  const [text, setText] = useState("");
  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    setText(event.target.value);
  };

  return (
    <Form className="w-full mx-auto max-w-2xl flex flex-row space-x-2 items-center">
      <input
        onChange={handleOnChange}
        type="text"
        name="newSearch"
        value={text}
        placeholder="Find a recipe..."
        className={`px-5 py-3 mx-auto bg-white border-2 shadow-sm focus:shadow-xl border-slate-300 placeholder-slate-400 disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 focus:outline-none focus:border-amber-500 focus:ring-amber-500 block w-full rounded-full sm:text-sm focus:ring-1 disabled:shadow-none ${className}`}
      />
      <button type="submit">Clicked</button>
    </Form>
  );
}
