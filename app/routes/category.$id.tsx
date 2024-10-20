import invariant from "tiny-invariant";
import { json, LoaderFunctionArgs } from "@remix-run/node";
import { useLoaderData, useParams } from "@remix-run/react";
import PageTitle from "~/components/atoms/PageTitle";
import SearchRecipes from "~/components/SearchRecipes";
import MainLayout from "~/layout/main-layout";

interface FoodCategoryDetails {
  strMeal: string;
  strMealThumb: string;
  idMeal: string;
}

export const loader = async ({ params }: LoaderFunctionArgs) => {
  // check if the passed params are there / true, if not stop and through and error
  invariant(params.id, "Missing category id!");
  const response = await fetch(
    `https://www.themealdb.com/api/json/v1/1/filter.php?c=${params.id}`
  );
  const data = await response.json();
  
  if (!data) {
    throw new Response("Not Found", { status: 404 });
  }

  return json({ mealsList: data.meals as FoodCategoryDetails[] });
};

const CategoryDetails = () => {
  const data = useLoaderData<typeof loader>();
  const { id: catName } = useParams();

  return (
    <MainLayout>
      <PageTitle>Category: {catName} </PageTitle>

      <div className="mb-12">
        <SearchRecipes />
      </div>

      <div>
        <ul className="grid grid-cols-3 gap-4">
          {data.mealsList &&
            data.mealsList.map((meal: FoodCategoryDetails) => (
              <li
                key={meal.idMeal}
                className="flex flex-col bg-white p-6 text-center hover:shadow-lg transition-all duration-200 ease-in-out cursor-pointer rounded-2xl group"
              >
                <div>
                  <img
                    src={meal.strMealThumb}
                    alt={meal.strMeal}
                    width="162"
                    className="mx-auto group-hover:scale-110 transition-all duration-200 ease-in-out"
                  />
                </div>
                <div className="flex-1 pt-4">
                  <strong className="text-lg">{meal.strMeal}</strong>
                </div>
              </li>
            ))}
        </ul>
      </div>
    </MainLayout>
  );
};

export default CategoryDetails;
