import { cn } from "@/shared/lib/utils";

type HookFormInputProps = {
  register: any;
  errors: any;
  formInput: string;
  input: string;
  type: string;
  [key: string]: any;
};

const HookFormInput = ({
  register,
  errors,
  formInput,
  input,
  type,
  ...props
}: HookFormInputProps) => {
  return (
    <div className={cn(formInput)}>
      <input
        autoComplete="none"
        className={cn(input)}
        {...register(type, {
          // required: "Обязательно к заполнению!",
          pattern: {
            value: new RegExp(props.pattern),
            message: "Пожалуйста, введите корректные данные!",
          },
        })}
        type={type}
        {...props}
      />
      {errors?.[type] && (
        <span style={{ color: "red" }}>{errors[type].message}</span>
      )}
    </div>
  );
};

export default HookFormInput;
