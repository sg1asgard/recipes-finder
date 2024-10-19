// 'use client';
// import styled from "styled-components";
// const Container = styled.div``;

import RandomRecipes from "@/app/components/RandomRecipes";

interface RecipeData {
  recipe: string;
}

export default async function Home() {
  const response = await fetch(
    `https://www.themealdb.com/api/json/v1/1/random.php`
  );
  const data = await response.json();

  return (
    <div className="">
      <main>
        <h1>Home</h1>
        <div>
          <RandomRecipes {...data} />
        </div>
      </main>
    </div>
  );
}
