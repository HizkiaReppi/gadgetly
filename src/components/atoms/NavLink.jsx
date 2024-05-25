import { useState } from "react";
import { Link } from "react-router-dom";
import clsx from "clsx";

const NavLink = ({ href, className = "", active = false, children }) => {
  const [activeHover, setActiveHover] = useState(false);

  return (
    <Link
      to={href}
      className={clsx(
        `relative text-sm font-medium md:text-base ${
          active ? "text-primary-500" : "text-black"
        } duration-100 hover:text-primary-500 ${className}`,
      )}
      onMouseEnter={() => setActiveHover(true)}
      onMouseLeave={() => setActiveHover(false)}
    >
      {children}
      {(active || activeHover) && (
        <span className="absolute -bottom-2 left-0 h-0 w-full rounded-full bg-primary-500 md:h-0.5" />
      )}
    </Link>
  );
};

export default NavLink;
