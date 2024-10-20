import { json, LoaderFunctionArgs } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import PageTitle from "~/components/atoms/PageTitle";
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
  console.log('category details', data);
  return json({ foodCategory: data.meals as FoodCategoryDetails[] });
};

const CategoryDetails = () => {
  const data = useLoaderData<typeof loader>();
  return (
    <MainLayout>
      <PageTitle>Recipe details</PageTitle>
    </MainLayout>
  );
};

export default CategoryDetails;
