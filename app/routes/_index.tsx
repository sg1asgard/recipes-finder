import React, { useState } from "react";
import type { MetaFunction } from "@remix-run/node";
import ButtonPrimary from "~/components/atoms/ButtonPrimary";
import NavHeader from "~/components/NavHeader";
import SearchRecipes from "~/components/SearchRecipes";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  const [count, setCount] = useState(0);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    setCount(count + 1);
    console.log("button clicked", count);
  };

  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    console.log('search for:', event.target.value)
  }

  return (
    <div className="container mx-auto">
      <NavHeader />
      <main>
        <div className="py-6">
          <h1 className="text-3xl font-bold w-full text-center">
            What would you like to eat today?
          </h1>
        </div>
        <div>
          <SearchRecipes onChange={handleOnChange} />
        </div>
        <div className="mt-10">
          <ButtonPrimary onClick={handleClick}>Click to count</ButtonPrimary>
        </div>
        <div>Number of cliks: {count}</div>
      </main>
    </div>
  );
}
