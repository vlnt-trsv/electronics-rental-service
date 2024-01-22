import { SubmitHandler, useForm } from "react-hook-form";
import { IShippingField } from "./EnterHookForm.interface";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

import styles from "./EnterHookForm.module.scss";

import HookFormInput from "@/components/ui/hookFormInput/HookFormInput";

const EnterHookForm = ({ formClassName, handleGetCode }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IShippingField>({
    mode: "onChange",
  });

  const onSubmit: SubmitHandler<IShippingField> = (data) => {
    handleGetCode(data);
    console.log(data);
  };

  return (
    <form className={cn(formClassName)} onSubmit={handleSubmit(onSubmit)}>
      <HookFormInput
        register={register}
        errors={errors}
        type="nickname"
        formInput={styles.form}
        input={styles.form__input}
        placeholder="Никнейм"
        maxLength="12"
        minLength="4"
        // pattern=""
      />
      <HookFormInput
        register={register}
        errors={errors}
        type="tel"
        formInput={styles.form}
        input={styles.form__input}
        placeholder="Телефон"
        maxLength="12"
        // pattern=""
      />
      <Button variant="primary" size="default" type="submit">
        Получить код
      </Button>
    </form>
  );
};

export default EnterHookForm;
