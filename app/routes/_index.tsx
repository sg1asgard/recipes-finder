import React from "react";
import { useState } from "react";
import type { MetaFunction } from "@remix-run/node";
import ButtonPrimary from "~/components/atoms/ButtonPrimary";
import NavHeader from "~/components/NavHeader";

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
    setCount(count + 1)
    console.log("button clicked", count);
  };
  return (
    <div className="container mx-auto">
      <NavHeader />
      <main>
        <h1 className="text-3xl font-bold underline">Hello world!</h1>
        <div className="mt-10">
          <ButtonPrimary onClick={handleClick}>Click to count</ButtonPrimary>
        </div>
        <div>
          Number of cliks: {count}
        </div>
      </main>
    </div>
  );
}
