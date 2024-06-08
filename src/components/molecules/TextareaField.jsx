import Label from "../atoms/Label";
import Textarea from "../atoms/Textarea";
import InputError from "../atoms/InputError";
import InputPassword from "./InputPassword";

const TextareaField = ({
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
      <Textarea
        type={type}
        placeholder={placeholder}
        name={name}
        id={id}
        minLength={minLength}
        maxLength={maxLength}
        register={register}
        errors={errors}
        required={required}
      ></Textarea>
    )}
    <InputError error={errors?.message} />
  </div>
);

export default TextareaField;
