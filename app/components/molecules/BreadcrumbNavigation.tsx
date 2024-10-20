interface BreadcrumbProps {
    className?: string,
    category?: string,
    recipe?: string
}
const Breadcrumb = ({ className, category, recipe }: BreadcrumbProps) => {
  <div>
    <ul className={`flex flex-row ${className}`}>
      <li>Home</li>
      { category ? <li>{category}</li> : ''}
      { category ? <li>{recipe}</li> : ''}
    </ul>
  </div>;
};

export default Breadcrumb;
