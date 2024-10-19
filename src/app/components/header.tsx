'use client';
import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import FoodSearchLogo from "@/app/assets/images/food_search_logo.svg";

export default function Header() {
  const pathname = usePathname();
  return (
    <header>
      <div className="flex flex-row items-center py-4">
        <div className="flex-1">
          <Link href="/" className="hover:opacity-75 inline-block">
            <Image src={FoodSearchLogo} alt="food search logo" height={48} />
          </Link>
        </div>
        <div>
          <nav>
            <ul className="flex gap-x-5">
              <Link href="/">Home</Link>
              <Link href="recipes">Recipes</Link>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}
