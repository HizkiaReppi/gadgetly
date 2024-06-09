import Label from "../atoms/Label";
import Input from "../atoms/Input";
import InputError from "../atoms/InputError";
import InputPassword from "./InputPassword";

const InputField = ({
  label,
  type,
  name,
  id,
  placeholder,
  minLength,
  maxLength,
  register,
  errors,
  required,
  watch,
  placeholderWatch,
  className,
  defaultValue,
}) => (
  <div className={className}>
    <Label htmlFor={id} className="mb-1.5">
      {label}
    </Label>
    {type === "password" ? (
      <InputPassword
        name={name}
        id={id}
        placeholder={placeholder}
        minLength={minLength}
        maxLength={maxLength}
        register={register}
        errors={errors}
        required={required}
        watch={watch ? watch : null}
        placeholderWatch={placeholderWatch ? placeholderWatch : null}
      />
    ) : (
      <Input
        type={type}
        placeholder={placeholder}
        name={name}
        id={id}
        minLength={minLength}
        maxLength={maxLength}
        register={register}
        errors={errors}
        required={required}
        defaultValue={defaultValue}
      />
    )}
    <InputError error={errors?.message} />
  </div>
);

export default InputField;
