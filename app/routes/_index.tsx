import type { MetaFunction } from "@remix-run/node";
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
          <button className="bg-indigo-600 text-white py-2 px-4 rounded-full hover:bg-indigo-500">Count the clicks</button>
        </div>
      </main>
    </div>
  );
}
