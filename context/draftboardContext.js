import React from "react";
import { createContext } from "react";
import useSelection from "../hooks/useSelection";

export const DraftboardContext = createContext();

export default function DraftboardContextProvider({ children }) {
  const { selectedPlayers, setSelectedPlayers } = useSelection();
  return (
    <DraftboardContext.Provider value={{ selectedPlayers, setSelectedPlayers }}>
      {children}
    </DraftboardContext.Provider>
  );
}
