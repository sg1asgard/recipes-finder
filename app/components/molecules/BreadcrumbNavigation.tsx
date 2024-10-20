import { NavLink } from "@remix-run/react";

interface BreadcrumbProps {
  className?: string;
  category?: string;
  recipe?: string;
}

const Breadcrumb: React.FC<BreadcrumbProps> = ({
  className,
  category,
  recipe,
}) => {
  return (
    <div>
      <ul className={`flex flex-row font-semibold ${className}`}>
        <li>
          <NavLink to="/" viewTransition className="hover:underline">
            Home
          </NavLink>
        </li>
        {category && (
          <li className="flex flex-row space-x-2 ps-2">
            <span className="">&gt;</span> <span>{category}</span>
          </li>
        )}
        {recipe && <li>{recipe}</li>}
      </ul>
    </div>
  );
};

export default Breadcrumb;
