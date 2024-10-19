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
  return (
    <div className="container mx-auto">
      <NavHeader />
      <main>
        <h1 className="text-3xl font-bold underline">Hello world!</h1>
        <div className="mt-10">
          <ButtonPrimary text="Click to count" />
        </div>
      </main>
    </div>
  );
}
