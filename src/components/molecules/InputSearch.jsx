import { useState } from "react";
import { MdSearch } from "react-icons/md";
import Input from "../atoms/Input";

const InputSearch = ({ register }) => {
  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  return (
    <div className="relative">
      <Input
        id="search"
        name="search"
        placeholder="Cari Produk"
        register={register}
        minLength={3}
        maxLength={255}
        className="group h-12 px-4 py-0 text-sm placeholder:text-sm focus:border-primary-500 focus:ring-primary-500"
        onFocus={handleFocus}
        onBlur={handleBlur}
      />
      <MdSearch
        className={`absolute right-0 top-0 h-12 w-12 cursor-pointer rounded-r-md border-y-2 border-r-2 bg-white p-3 text-sm ${
          isFocused
            ? "border-y-[3px] border-r-[3px] border-black p-1 text-base ring-black"
            : "border-gray-300"
        }`}
      />
    </div>
  );
};

export default InputSearch;
