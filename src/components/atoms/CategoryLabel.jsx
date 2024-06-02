const CategoryLabel = ({ outline = false, category, className = "" }) => {
  return (
    <div
      className={`inline-flex items-center justify-center gap-5 rounded-sm px-7 py-2 ${outline ? "bg-primary-500 text-white" : "border border-primary-500 text-primary-500"} ${className}`}
    >
      {category}
    </div>
  );
};

export default CategoryLabel;
