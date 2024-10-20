import React from "react";

export default function ButtonPrimary({
  className,
  type,
  ...props
}: React.ComponentProps<"button">) {
  return (
    <button
      type={type}
      className={`rounded-full px-4 py-2 bg-indigo-600 text-white hover:bg-indigo-500 border-2 border-indigo-600 hover:border-indigo-500 ${className}`}
      {...props}
    />
  );
}
