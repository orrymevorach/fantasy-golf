import React from "react";
import styles from "./player.module.scss";

const Player = ({ player }) => {
  return (
    <div className={styles.player}>
      <span>{player.name}</span>
      <img src={player.flag} alt="" />
    </div>
  );
};

export default Player;
