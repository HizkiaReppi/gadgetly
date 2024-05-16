import { useState } from "react";
import { FiEye, FiEyeOff } from "react-icons/fi";
import Input from "../atoms/Input";

const PasswordInput = ({ ...props }) => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="relative">
      <Input {...props} type={showPassword ? "text" : "password"} />
      {showPassword ? (
        <FiEye
          className="absolute right-6 top-1/2 z-10 -translate-y-1/2 cursor-pointer text-lg md:text-xl lg:right-[30px] lg:text-2xl"
          onClick={togglePasswordVisibility}
        />
      ) : (
        <FiEyeOff
          className="absolute right-6 top-1/2 z-10 -translate-y-1/2 cursor-pointer text-lg md:text-xl lg:right-[30px] lg:text-2xl"
          onClick={togglePasswordVisibility}
        />
      )}
    </div>
  );
};

export default PasswordInput;
