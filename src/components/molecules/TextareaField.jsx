import Label from "../atoms/Label";
import Textarea from "../atoms/Textarea";
import InputError from "../atoms/InputError";

const TextareaField = ({
  label,
  name,
  id,
  placeholder,
  minLength,
  maxLength,
  register,
  errors,
  required,
  className,
  textareaClassName,
  disabled,
}) => (
  <div className={className}>
    <Label htmlFor={id} className="mb-1.5">
      {label}
    </Label>
    <Textarea
      placeholder={placeholder}
      name={name}
      id={id}
      minLength={minLength}
      maxLength={maxLength}
      register={register}
      errors={errors}
      required={required}
      disabled={disabled}
      className={textareaClassName}
    ></Textarea>
    <InputError error={errors?.message} />
  </div>
);

export default TextareaField;
