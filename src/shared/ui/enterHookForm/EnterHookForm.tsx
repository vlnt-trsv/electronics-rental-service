import { SubmitHandler, useForm } from "react-hook-form";
import { IShippingField } from "./EnterHookForm.interface";
import { cn } from "@/shared/lib/utils";
import { Button } from "@/shared/ui/button/button";

// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

import styles from "./EnterHookForm.module.scss";

import HookFormInput from "@/shared/ui/hookFormInput/HookFormInput";

const EnterHookForm = ({ formClassName, handleGetCode }: any) => {
  // const notify = () => toast("Wow so easy !");
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IShippingField>({
    mode: "onChange",
  });

  const onSubmit: SubmitHandler<IShippingField> = (data) => {
    handleGetCode({ email: data.email });
  };

  return (
    <form className={cn(formClassName)} onSubmit={handleSubmit(onSubmit)}>
      {/* <HookFormInput
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
      /> */}
      <HookFormInput
        register={register}
        errors={errors}
        type="email"
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
