import clsx from "clsx";

const Input = ({
  className,
  type,
  name,
  id,
  errors,
  placeholder,
  register,
  minLength,
  maxLength,
  watch = null,
  placeholderWatch = null,
  required,
  defaultValue,
  ...props
}) => {
  if (typeof register !== "function") {
    return null;
  }

  const validationRules = {
    required: {
      value: required,
      message: `${placeholder} wajib diisi!`,
    },
    minLength: {
      value: minLength,
      message: `${placeholder} minimal ${minLength} karakter!`,
    },
    maxLength: {
      value: maxLength,
      message: `${placeholder} maksimal ${maxLength} karakter!`,
    },
    validate: (value) => {
      if (watch) {
        return (
          value === watch ||
          `${placeholder} harus sama dengan ${placeholderWatch}`
        );
      }
    },
  };

  if (type === "tel" || name === "phone") {
    validationRules.pattern = {
      value: /^08\d{8,13}$/,
      message: `${placeholder} harus diisi dengan format nomor telepon yang benar! (diawali dengan 08)`,
    };
  }

  return (
    <input
      className={clsx(
        `
        block w-full rounded-md border-2 border-gray-300 bg-transparent p-2.5 px-6 py-2.5 text-sm text-black placeholder:text-gray-500 focus:border-primary-500 focus:ring-primary-500 lg:px-[30px] lg:py-[15px] lg:text-base ${errors ? "border-red-500 text-red-500" : ""}`,
        className,
      )}
      type={type}
      name={name}
      id={id}
      placeholder={placeholder}
      {...register(name, validationRules)}
      defaultValue={defaultValue ? defaultValue : ""}
      {...props}
    />
  );
};

export default Input;
