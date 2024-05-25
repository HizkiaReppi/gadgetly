const Featured = ({ icon, text }) => {
  return (
    <div className="flex w-[280px] flex-col items-center bg-white px-2 py-10 shadow-md">
      <div className="mb-3 h-16 w-16 flex justify-center items-center">{icon}</div>
      <p className="text-center text-2xl">{text}</p>
    </div>
  );
};

export default Featured;
