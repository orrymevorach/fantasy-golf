import { useState } from "react";

export default function useSelection() {
  const initialSelectedPlayers = [
    {
      group: "group-1",
      selectedPlayer: {},
    },
    {
      group: "group-2",
      selectedPlayer: {},
    },
    {
      group: "group-3",
      selectedPlayer: {},
    },
    {
      group: "group-4",
      selectedPlayer: {},
    },
    {
      group: "group-5",
      selectedPlayer: {},
    },
    {
      group: "group-6",
      selectedPlayer: {},
    },
  ];
  const [selectedPlayers, setSelectedPlayers] = useState(
    initialSelectedPlayers
  );
  return {
    selectedPlayers,
    setSelectedPlayers,
  };
}
