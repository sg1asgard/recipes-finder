interface BreadcrumbProps {
    className?: string,
    category?: string,
    recipe?: string
}
const Breadcrumb = ({ className, category, recipe }: BreadcrumbProps) => {
  <div>
    <ul className="flex flex-row">
      <li>Home</li>
      <li>{category}</li>
    </ul>
  </div>;
};

export default Breadcrumb;
