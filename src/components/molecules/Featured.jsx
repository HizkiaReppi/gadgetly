const Featured = ({ icon, text }) => {
  return (
    <div className="flex w-full flex-col items-center rounded bg-white px-1 py-8 md:py-10 shadow md:px-2 md:shadow-md">
      <div className="mb-3 flex h-10 w-10 items-center justify-center md:h-14 md:w-14 lg:h-16 lg:w-16">
        {icon}
      </div>
      <p className="text-center text-base md:text-xl lg:text-2xl">{text}</p>
    </div>
  );
};

export default Featured;
