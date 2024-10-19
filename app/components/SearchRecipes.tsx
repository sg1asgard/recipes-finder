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
    <div className="flex flex-row">
      <input
      onChange={handleOnChange}
        type="text"
        value={text}
        placeholder="Find a recipe..."
        className={`w-full px-6 py-4 rounded-full ${className}`}
      />
    </div>
  );
}
