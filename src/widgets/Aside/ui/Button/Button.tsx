import { NavLink } from "react-router-dom";
import styles from "./Button.module.scss";

type ButtonType = {
  children: string;
  location: string;
  justify?:
    | "left"
    | "center"
    | "flex-start"
    | "flex-end"
    | "space-between"
    | "space-around";
  type: "primary" | "secondary" | "tertiary";
  icon?: string;
};

const Button = ({ children, location, justify, type, icon }: ButtonType) => {
  const justifyClass = justify ? styles[justify] : "";
  const typeClass = type ? styles[type] : "";

  const getActiveClassName = (isActive: boolean) => {
    if (!isActive) return "";
    switch (type) {
      case "primary":
        return styles.primary__active;
      case "secondary":
        return styles.secondary__active;
      case "tertiary":
        return styles.tertiary__active;
      default:
        return "";
    }
  };

  return (
    <NavLink
      to={location}
      className={({ isActive }) =>
        `${styles.button} ${typeClass} ${justifyClass} ${getActiveClassName(
          isActive
        )}`
      }
    >
      {icon ? <div className={styles.button__icon}>{icon}</div> : ""}
      {children}
    </NavLink>
  );
};

export default Button;
