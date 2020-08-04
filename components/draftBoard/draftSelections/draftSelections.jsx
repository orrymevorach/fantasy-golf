import React, { useContext, useState, useEffect } from "react";
import { DraftboardContext } from "../../../context/draftboardContext";
import Player from "../../shared/player/player";
import styles from "./draftSelection.module.scss";
import { base } from "../../../utils/airtableUtils";
import { isEmpty } from "../../../utils/general";
import { AuthContext } from "../../../context/authContext";
import { useRouter } from "next/router";

export default function DraftSelection() {
  const Router = useRouter();
  const { selectedPlayers } = useContext(DraftboardContext);
  const {
    user: { oAuthId, displayName },
  } = useContext(AuthContext);
  const [numberOfSelectedPlayers, setNumberOfSelectedPlayers] = useState(0);

  useEffect(() => {
    setNumberOfSelectedPlayers(
      selectedPlayers.reduce((acc, curr) => {
        if (!isEmpty(curr.selectedPlayer)) {
          return acc + 1;
        }
        return acc;
      }, 0)
    );
  }, [selectedPlayers]);

  function formatGroupName(group) {
    const groupNumber = group.split("-")[1];
    return `Group ${groupNumber}`;
  }

  function submitPicks() {
    base("Draft Selections").create(
      [
        {
          fields: {
            userId: oAuthId,
            userName: displayName,
            players: [
              selectedPlayers[0].selectedPlayer.id,
              selectedPlayers[1].selectedPlayer.id,
              selectedPlayers[2].selectedPlayer.id,
              selectedPlayers[3].selectedPlayer.id,
              selectedPlayers[4].selectedPlayer.id,
              selectedPlayers[5].selectedPlayer.id,
            ],
          },
        },
      ],
      function (err) {
        if (err) {
          console.error(err);
          return;
        }
        Router.push({
          pathname: "/team",
          query: { userId: oAuthId },
        });
      }
    );
  }
  return (
    <div className={styles.draftSelections}>
      <h2>
        Selections: <span>{numberOfSelectedPlayers}/6</span>
      </h2>

      <ul>
        {selectedPlayers.map(({ group, selectedPlayer }) => {
          return (
            <li className={styles.selectedPlayer} key={group}>
              <p className={styles.group}>{formatGroupName(group)}:</p>
              <div className={styles.player}>
                {!isEmpty(selectedPlayer) && <Player player={selectedPlayer} />}
              </div>
            </li>
          );
        })}
      </ul>
      {numberOfSelectedPlayers === 6 && (
        <button onClick={submitPicks}>Submit</button>
      )}
    </div>
  );
}
