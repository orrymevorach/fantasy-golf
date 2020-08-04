import React from "react";
import styles from "./draftBoard.module.scss";
import Groups from "./groups/groups";
import usePlayerGroups from "../../hooks/usePlayerGroups";
import DraftSelections from "./draftSelections/draftSelections";

export default function Draftboard() {
  const { playerGroups } = usePlayerGroups();

  return (
    <div className={styles.draftBoard}>
      <DraftSelections />
      {playerGroups.length > 0 && <Groups groups={playerGroups} />}
    </div>
  );
}
