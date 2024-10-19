import React from "react";
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
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    console.log("button clicked");
  };
  return (
    <div className="container mx-auto">
      <NavHeader />
      <main>
        <h1 className="text-3xl font-bold underline">Hello world!</h1>
        <div className="mt-10">
          <ButtonPrimary onClick={handleClick} text="Click to count" />
        </div>
      </main>
    </div>
  );
}
