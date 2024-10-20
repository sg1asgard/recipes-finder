import React, { useState } from "react";
import { NavLink, useLoaderData } from "@remix-run/react";
import { MetaFunction, json } from "@remix-run/node";
import ButtonPrimary from "~/components/atoms/ButtonPrimary";
import SearchRecipes from "~/components/SearchRecipes";
import MainLayout from "~/layout/main-layout";
import PageTitle from "~/components/atoms/PageTitle";

export const meta: MetaFunction = () => {
  return [
    { title: "food search" },
    { name: "description", content: "Search the best food recipes!" },
  ];
};

interface FoodCategory {
  idCategory: string;
  strCategory: string;
  strCategoryThumb: string;
  strCategoryDescription: string;
}

export async function loader() {
  try {
    const response = await fetch(
      "https://www.themealdb.com/api/json/v1/1/categories.php"
    );
    const data = await response.json();

    if (!data) {
      throw new Response("Not Found", { status: 404 });
    }

    return json({ foodCategories: data.categories as FoodCategory[] });
  } catch (error) {
    console.log(error);
  }
}

export default function Index() {
  const categories = useLoaderData<typeof loader>();
  const [count, setCount] = useState(0);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    setCount(count + 1);
  };

  return (
    <MainLayout>
      <PageTitle>What would you like to eat today?</PageTitle>

      <div className="mb-12">
        <SearchRecipes />
      </div>

      <div>
        <h3 className="text-2xl font-bold text-slate-800 pb-4">
          Recipes Categories
        </h3>
        <ul className="grid grid-cols-3 gap-4">
          {categories &&
            categories.foodCategories.map((category: FoodCategory) => (
              <li
                key={category.idCategory}
                className="bg-white p-6 text-center hover:shadow-lg transition-all duration-200 ease-in-out cursor-pointer rounded-2xl group"
              >
                <NavLink
                  to={`/category/${category.strCategory}`}
                  viewTransition
                >
                  <div>
                    <img
                      src={category.strCategoryThumb}
                      alt={category.strCategory}
                      width="162"
                      className="mx-auto group-hover:scale-110 transition-all duration-200 ease-in-out"
                    />
                  </div>
                  <div className="flex-1 pt-4">
                    <strong className="text-lg">{category.strCategory}</strong>
                    {/* <p>{category.strCategoryDescription.split(' ').slice(0, 16).join(' ') + 
    (category.strCategoryDescription.split(' ').length > 16 ? '...' : '')}</p> */}
                  </div>
                </NavLink>
              </li>
            ))}
        </ul>
      </div>

      <div className="mt-10">
        <ButtonPrimary onClick={handleClick}>Click to count</ButtonPrimary>
      </div>
      <div>Number of clicks: {count}</div>
    </MainLayout>
  );
}
