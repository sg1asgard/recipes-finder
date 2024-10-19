import React, { useState } from "react";
import { useLoaderData } from "@remix-run/react";
import { MetaFunction, json } from "@remix-run/node";
import ButtonPrimary from "~/components/atoms/ButtonPrimary";
import NavHeader from "~/components/NavHeader";
import SearchRecipes from "~/components/SearchRecipes";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export async function loader() {
  const response = await fetch(
    "https://www.themealdb.com/api/json/v1/1/categories.php"
  );
  const data = await response.json();
  return json(data);
}

export default function Index() {
  const data = useLoaderData<typeof loader>();
  console.log("data", data);
  const [count, setCount] = useState(0);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    setCount(count + 1);
    console.log("button clicked", count);
  };

  return (
    <div className="container mx-auto max-w-4xl">
      <NavHeader />
      <main>
        <div className="py-6">
          <h1 className="text-3xl font-bold w-full text-center">
            What would you like to eat today?
          </h1>
        </div>
        <div>
          <SearchRecipes />
        </div>

        <div>
          <ul>
            {data.categories && data.categories.map((category) => (
              <li key={category.idCategory}>{category.strCategory}</li>
            ))}
          </ul>
        </div>

        <div className="mt-10">
          <ButtonPrimary onClick={handleClick}>Click to count</ButtonPrimary>
        </div>
        <div>Number of clicks: {count}</div>
      </main>
    </div>
  );
}