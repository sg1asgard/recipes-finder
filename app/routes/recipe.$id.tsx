import { LoaderFunctionArgs } from "@remix-run/node";
import PageTitle from "~/components/atoms/PageTitle";
import MainLayout from "~/layout/main-layout";

export const loader = async ({ params }: LoaderFunctionArgs) => {
  console.log(params);
  return null;
};

const RecipeDetails = () => {
  return (
    <MainLayout>
      <PageTitle>Recipe details</PageTitle>
    </MainLayout>
  );
};

export default RecipeDetails;
