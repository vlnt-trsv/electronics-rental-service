import React, { CSSProperties, ReactNode } from "react";

type JustifyType = "space-between" | "center";

interface TextProps {
  children: ReactNode;
  flex?: boolean;
  justify?: JustifyType;
  size?: string | number;
  color?: string;
  weight?: string | number;
  style?: CSSProperties;
  className?: string;
}

const Text: React.FC<TextProps> = ({
  children,
  flex = false,
  justify,
  size = "16px",
  color,
  weight = "normal",
  style: userStyles = {},
  className = "",
  ...props
}) => {
  const style: CSSProperties = {
    display: flex ? "flex" : undefined,
    justifyContent: justify,
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
