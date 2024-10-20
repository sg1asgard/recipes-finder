import React from "react";
import NavHeader from "~/components/NavHeader";

export default function MainLayout({ children, ...props }: React.ComponentProps<'main'>) {
  return (
    <div className="container mx-auto max-w-4xl">
      <NavHeader />
      <main {...props}>{children}</main>
    </div>
  );
}