import { cn } from "@/shared/lib/utils";

const HookFormInput = ({ register, errors, formInput, input, type, ...props }) => {
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
