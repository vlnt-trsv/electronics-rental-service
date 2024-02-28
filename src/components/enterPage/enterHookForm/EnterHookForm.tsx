import { SubmitHandler, useForm } from "react-hook-form";
import { IShippingField } from "./EnterHookForm.interface";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

import styles from "./EnterHookForm.module.scss";

import HookFormInput from "@/components/ui/hookFormInput/HookFormInput";

const EnterHookForm = ({ formClassName, handleGetCode }) => {
  // const notify = () => toast("Wow so easy !");
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
        required
        placeholder="Никнейм"
        maxLength="12"
        minLength="4"
        // pattern=""
      />
      {/* ТЕЛЕФОН */}
      {/* <HookFormInput
        register={register}
        errors={errors}
        type="tel"
        formInput={styles.form}
        required
        input={styles.form__input}
        placeholder="Телефон"
        maxLength="12"
        // pattern=""
      /> */}
      <HookFormInput
        register={register}
        errors={errors}
        type="tel"
        formInput={styles.form}
        required
        input={styles.form__input}
        placeholder="Email"
        maxLength="32"
        // pattern=""
      />
      <Button variant="primary" size="default" type="submit">
        Получить код
      </Button>
    </form>
  );
};

export default EnterHookForm;
