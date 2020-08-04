import React from "react";
import styles from "./column.module.scss";

const Column = ({ data, heading, style }) => {
  return (
    <div style={{ ...style }} className={styles.column}>
      <h3 className={styles.columnTitle}>{heading}</h3>
      {data.length > 0 &&
        data.map(value => (
          <div className={styles.valueContainer}>
            <p>{value}</p>
          </div>
        ))}
    </div>
  );
};

export default Column;
