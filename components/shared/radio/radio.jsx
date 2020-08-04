import React from "react";
import styles from "./radio.module.scss";

export default function Radio({ children, name, id, onChange }) {
  return (
    <div className={styles.radio}>
      <input type="radio" name={name} id={id} value={id} onChange={onChange} />
      <label htmlFor={id}>{children}</label>
    </div>
  );
}
