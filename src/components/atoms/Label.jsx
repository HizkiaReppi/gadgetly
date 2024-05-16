import clsx from "clsx";

const Label = ({ htmlFor, className, children, ...props }) => {
  return (
    <label
      htmlFor={htmlFor}
      className={clsx(`text-sm text-black lg:text-base ${className}`)}
      {...props}
    >
      {children}
    </label>
  );
};

export default Label;
