import React from "react";
import Group from "./group/group";
import styles from "./groups.module.scss";

export default function Groups({ groups }) {
  return (
    <ul className={styles.groups}>
      {groups.map((group, index) => {
        return (
          <Group group={group} index={index} key={`group-group-${index}`} />
        );
      })}
    </ul>
  );
}
