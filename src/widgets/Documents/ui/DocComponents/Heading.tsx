import React from "react";

const Heading = ({
  level,
  children,
}: {
  level: number;
  children: React.ReactNode;
}) => {
  const Tag = `h${level}`;
  return React.createElement(Tag, null, children);
};

export default Heading;
