import { LoaderFunctionArgs } from "@remix-run/node";

export const loader = async ({ params }: LoaderFunctionArgs) => {
  console.log(params);
  return null;
};

const RecipeDetails = () => {
  return <h1>Recipe details</h1>;
};

export default RecipeDetails;
