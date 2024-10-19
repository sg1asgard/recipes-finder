import React from "react";

export default function SearchRecipes({
  className,
  ...props
}: React.ComponentProps<"input">) {
  return (
    <div className="flex flex-row">
      <input
        type="text"
        value=""
        placeholder="Find a recipe..."
        className={`w-full px-6 py-4 rounded-full ${className}`}
      />
    </div>
  );
}
