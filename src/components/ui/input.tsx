import * as React from "react";

import { cn } from "@/lib/utils";

import styles from "./input.module.scss";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  validationEnabled?: boolean;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, validationEnabled = false, ...props }, ref) => {
    const [isValid, setIsValid] = React.useState(true);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const value = e.target.value;
      setIsValid(validationEnabled ? value.trim() !== "" : true);
    };

    return (
      <>
        <input
          key={validationEnabled ? "enabled" : "disabled"}
          type={type}
          className={cn(className, {
            invalid: validationEnabled && !isValid,
          })}
          ref={ref}
          onChange={handleInputChange}
          {...props}
        />
        {validationEnabled && !isValid && (
          <span className={styles.error}>Поле не может быть пустым</span>
        )}
      </>
    );
  }
);

Input.displayName = "Input";

export { Input };
