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
  const response = await fetch(
    `https://www.themealdb.com/api/json/v1/1/filter.php?c=${params.id}`
  );

  const data = await response.json();
  console.log("category details", data);
  return json({ mealsList: data.meals as FoodCategoryDetails[] });
};

const CategoryDetails = () => {
  const params = useParams();
  const data = useLoaderData<typeof loader>();
  return (
    <MainLayout>
      <PageTitle>Category: ... </PageTitle>

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
                  {/* <p>{category.strCategoryDescription.split(' ').slice(0, 16).join(' ') + 
    (category.strCategoryDescription.split(' ').length > 16 ? '...' : '')}</p> */}
                </div>
              </li>
            ))}
        </ul>
      </div>
    </MainLayout>
  );
};

export default CategoryDetails;
