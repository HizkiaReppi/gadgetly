import clsx from "clsx";

const Button = ({
  type = "button",
  outline = false,
  className,
  children,
  ...props
}) => {
  return (
    <button
      type={type}
      className={clsx(
        `${outline ? "border border-primary-500 text-primary-500 hover:border-primary-600 hover:text-primary-600 disabled:border-gray-200 disabled:text-gray-200 disabled:hover:text-gray-200" : "border-0 bg-primary-500 text-white hover:bg-primary-600 hover:text-white disabled:bg-gray-200 disabled:text-gray-400 disabled:hover:text-gray-400"}, inline-flex cursor-pointer items-center justify-center gap-5 rounded-md px-4 py-2.5 text-base font-medium  duration-150 ease-linear disabled:cursor-not-allowed md:px-10 lg:px-20 lg:text-lg ${className}`,
      )}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
