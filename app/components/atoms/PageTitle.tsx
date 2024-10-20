import React from "react";

export default function PageTitle({
  children,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div className="py-6">
      <h1 className="text-3xl font-bold w-full text-center" {...props}>
        {children}
      </h1>
    </div>
  );
}
