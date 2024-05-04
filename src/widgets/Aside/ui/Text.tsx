import React, { CSSProperties, ReactNode } from "react";

interface TextProps {
  children: ReactNode;
  size?: string | number;
  color?: string;
  weight?: string | number;
  style?: CSSProperties;
  className?: string;
}

const Text: React.FC<TextProps> = ({
  children,
  size = "16px",
  color,
  weight = "normal",
  style: userStyles = {},
  className = "",
  ...props
}) => {
  const style: CSSProperties = {
    fontSize: size,
    color: color,
    fontWeight: weight,
    ...userStyles,
  };

  return (
    <span className={className} style={style} {...props}>
      {children}
    </span>
  );
};

export default Text;
