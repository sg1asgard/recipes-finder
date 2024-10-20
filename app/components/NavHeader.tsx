import { NavLink } from "@remix-run/react";
import RecipeFinderLogo from "../assets/images/food_search_logo.svg";

export default function NavHeader() {
  return (
    <div className="flex flex-row items-center py-6">
      <div className="flex-1">
        <NavLink to="/" viewTransition>
          <img
            src={RecipeFinderLogo}
            alt="recipe finder logo"
            className="h-12"
          />
        </NavLink>
      </div>
      <div>
        <NavLink to="/" viewTransition>Home</NavLink>
      </div>
    </div>
  );
}
