const BrandType = ({ brand, outline = false }) => {
  return (
    <div
      className={`${outline ? "border border-[#FFCD81] hover:bg-[#FFCD81]" : "bg-[#FFCD81] border border-[#FFCD81]"} inline-block w-full cursor-pointer rounded-md px-6 py-4 text-center text-lg md:px-8 md:py-5 md:text-xl lg:px-10 lg:text-2xl`}
    >
      <p>{brand}</p>
    </div>
  );
};

export default BrandType;
