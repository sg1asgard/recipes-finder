import Image from "next/image";
import FoodSearchLogo from "@/app/assets/images/food_search_logo.svg";

export default function Header() {
  return (
    <header>
      <div className="flex flex-row items-center py-4">
        <div className="flex-1">
          <Image src={FoodSearchLogo} alt="food search logo" height={48} />
        </div>
        <div>Nav items</div>
      </div>
    </header>
  );
}
