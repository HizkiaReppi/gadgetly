import { Link } from "react-router-dom";

/**
 * Breadcrumb component to display navigation links.
 *
 * @param {Object} props - The component props.
 * @param {Array<{ label: string, to?: string }>} props.items - The breadcrumb items.
 * @returns {JSX.Element} The rendered breadcrumb component.
 */
const Breadcrumb = ({ items }) => {
  return (
    <nav aria-label="breadcrumb" className="my-4">
      <ol className="flex flex-wrap">
        {items.map((item, index) => (
          <li
            key={index}
            className="inline-flex items-center text-sm font-medium md:text-base lg:text-lg"
          >
            {index > 0 && <span className="mx-2 text-black">&gt;</span>}
            {item.to ? (
              <Link to={item.to}>{item.label}</Link>
            ) : (
              <span className="text-black">{item.label}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
};

export default Breadcrumb;
