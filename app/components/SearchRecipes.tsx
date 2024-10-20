import type { ActionFunction } from "@remix-run/node";
import { json, redirect } from "@remix-run/node";
import { Form } from "@remix-run/react";
import React, { useState } from "react";

interface Meal {
  idMeal: string;
  strMeal: string;
  strDrinkAlternate: string | null;
  strCategory: string;
  strArea: string;
  strInstructions: string;
  strMealThumb: string;
  strTags: string | null;
  strYoutube: string;
  strIngredient1: string;
  strIngredient2: string;
  strIngredient3: string;
  strIngredient4: string;
  strIngredient5: string;
  strIngredient6: string;
  strIngredient7: string;
  strIngredient8: string;
  strIngredient9: string;
  strIngredient10: string;
  strIngredient11: string;
  strIngredient12: string;
  strIngredient13: string;
  strIngredient14: string;
  strIngredient15: string;
  strIngredient16: string | null;
  strIngredient17: string | null;
  strIngredient18: string | null;
  strIngredient19: string | null;
  strIngredient20: string | null;
  strMeasure1: string;
  strMeasure2: string;
  strMeasure3: string;
  strMeasure4: string;
  strMeasure5: string;
  strMeasure6: string;
  strMeasure7: string;
  strMeasure8: string;
  strMeasure9: string;
  strMeasure10: string;
  strMeasure11: string;
  strMeasure12: string;
  strMeasure13: string;
  strMeasure14: string;
  strMeasure15: string;
  strMeasure16: string | null;
  strMeasure17: string | null;
  strMeasure18: string | null;
  strMeasure19: string | null;
  strMeasure20: string | null;
  strSource: string | null;
  strImageSource: string | null;
  strCreativeCommonsConfirmed: string | null;
  dateModified: string | null;
}
interface MealDBResponse {
  meals: Meal[];
}

export const action: ActionFunction = async ({ request }) => {
  const formData = await request.formData();
  const recipeTitle = formData.get("newSearch");
  console.log("searched for:", recipeTitle);

  const response = await fetch(
    `https://www.themealdb.com/api/json/v1/1/search.php?s=${recipeTitle}`
  );
  const data: MealDBResponse = await response.json();
  return data.meals ? data.meals[0] : null;
};

export default function SearchRecipes({
  className,
}: React.ComponentProps<"input">) {
  const [text, setText] = useState("");
  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setText(event.target.value);
  };

  return (
    <Form className="w-full mx-auto max-w-2xl flex flex-row space-x-2 items-center" method="get">
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
