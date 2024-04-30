import * as React from "react";
import * as SwitchPrimitives from "@radix-ui/react-switch";

import styles from "./switch.module.scss";

import { cn } from "@/shared/lib/utils";

const Switch = React.forwardRef<
  React.ElementRef<typeof SwitchPrimitives.Root>,
  React.ComponentPropsWithoutRef<typeof SwitchPrimitives.Root>
>(({ className, ...props }, ref) => (
  <SwitchPrimitives.Root className={cn(className, styles.root)} {...props} ref={ref}>
    <SwitchPrimitives.Thumb className={cn(className, styles.thumb)} />
  </SwitchPrimitives.Root>
));
Switch.displayName = SwitchPrimitives.Root.displayName;

export { Switch };
