import React, { useState, useContext, useEffect, useCallback } from "react";
import Radio from "../../../shared/radio/radio";
import Player from "../../../shared/player/player";
import { DraftboardContext } from "../../../../context/draftboardContext";

export default function Group({ group, index }) {
  const [selectedPlayer, setSelectedPlayer] = useState({});
  const { selectedPlayers, setSelectedPlayers } = useContext(DraftboardContext);

  const updateSelections = useCallback(() => {
    return (
      selectedPlayers &&
      selectedPlayers.map(group => {
        if (group.group === selectedPlayer.group) {
          group.selectedPlayer = selectedPlayer;
        }
        return group;
      })
    );
  }, [selectedPlayer]);

  useEffect(() => {
    setSelectedPlayers(updateSelections());
  }, [setSelectedPlayers, updateSelections]);

  return (
    <li key={group}>
      <h1>Group {index + 1}</h1>
      <form>
        {group.map(player => {
          return (
            <Radio
              key={player.name}
              name={player.group}
              id={player.name}
              onChange={() => setSelectedPlayer(player)}
            >
              <Player player={player} />
            </Radio>
          );
        })}
      </form>
    </li>
  );
}
