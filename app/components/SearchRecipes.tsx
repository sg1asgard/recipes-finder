import React, { useState } from "react";

export default function SearchRecipes({
  className
}: React.ComponentProps<"input">) {
  const [text, setText] = useState("");
  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    setText(event.target.value)
    console.log("search for:", text);
  };

  return (
    <div className="flex flex-row items-center">
      <input
      onChange={handleOnChange}
        type="text"
        value={text}
        placeholder="Find a recipe..."
        className={`px-6 py-4 max-w-2xl mx-auto bg-white border-2 shadow-sm focus:shadow-xl border-slate-300 placeholder-slate-400 disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 focus:outline-none focus:border-indigo-500 focus:ring-indigo-500 block w-full rounded-full sm:text-sm focus:ring-1 disabled:shadow-none ${className}`}
      />
    </div>
  );
}
