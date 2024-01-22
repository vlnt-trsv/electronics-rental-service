import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

import styles from "./button.module.scss";

const buttonVariants = cva(
  styles.button,
  {
    variants: {
      variant: {
        default: styles.variant__default,
        primary: styles.variant__primary,
        secondary: styles.variant__secondary,
        outline: styles.variant__outline,
        ghost: styles.variant__ghost,
        link: styles.variant__link,
        disabled: styles.variant__disabled,
      },
      size: {
        default: styles.size__default,
        sm: styles.size__sm,
        lg: styles.size__lg,
        icon: styles.size__icon,
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
