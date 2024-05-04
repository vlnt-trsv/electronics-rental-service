import React from "react";
import styles from "./ViewGrid.module.scss";

type GridType = "container" | "header" | "aside" | "main";

const ViewGrid = ({
  children,
  type,
}: {
  children: React.ReactNode;
  type: GridType;
}) => {
  return <div className={styles[type]}>{children}</div>;
};

export default ViewGrid;
