import clsx from "clsx";

const Textarea = ({
  className,
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
  children,
  ...props
}) => {
  if (typeof register !== "function") {
    return null;
  }

  return (
    <textarea
      className={clsx(
        `
        block w-full rounded-md border-2 border-gray-300 bg-transparent p-2.5 px-6 py-2.5 text-sm text-black placeholder:text-gray-500 focus:border-primary-500 focus:ring-primary-500 lg:px-[30px] lg:py-[15px] lg:text-base ${errors ? "border-red-500 text-red-500" : ""}`,
        className,
      )}
      name={name}
      id={id}
      placeholder={placeholder}
      {...register(name, {
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
      })}
      {...props}
    >
      {children}
    </textarea>
  );
};

export default Textarea;
