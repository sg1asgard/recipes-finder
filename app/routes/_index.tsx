import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <div className="flex flex-col items-center gap-16">
      <header className="flex flex-col items-center gap-9">
        <h1 className="text-3xl font-bold underline">Hello world!</h1>
      </header>
    </div>
  );
}
