
interface BreadcrumbProps {
    className?: string;
    category?: string;
    recipe?: string;
}

const Breadcrumb: React.FC<BreadcrumbProps> = ({ className, category, recipe }) => {
  return (
    <div>
      <ul className={`flex flex-row ${className}`}>
        <li>Home</li>
        {category && <li>{category}</li>}
        {recipe && <li>{recipe}</li>}
      </ul>
    </div>
  );
};

export default Breadcrumb;