import React from "react";
import styles from "./leaderboard.module.scss";

export default function Leaderboard({ players }) {
  const formatPosition = position => {
    const numberPattern = /\d+/g;
    return position.match(numberPattern);
  };
  return (
    <>
      <h1>Leaderboard</h1>
      <ul>
        {players.map(
          ({ name, position, upDown, today, thru, R1, R2, R3, R4, TOT }) => {
            if (name) {
              return (
                <li key={name}>
                  <p className={styles.column}>{formatPosition(position)}</p>
                  <p className={styles.name}>{name}</p>
                  <p className={styles.column}>{upDown}</p>
                  <p className={styles.column}>{today}</p>
                  <p className={styles.column}>{thru}</p>
                  <p className={styles.column}>{R1}</p>
                  <p className={styles.column}>{R2}</p>
                  <p className={styles.column}>{R3}</p>
                  <p className={styles.column}>{R4}</p>
                  <p className={styles.column}>{TOT}</p>
                </li>
              );
            }
          }
        )}
      </ul>
    </>
  );
}
