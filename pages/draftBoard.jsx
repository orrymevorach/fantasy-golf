import Draftboard from "../components/draftBoard/draftBoard";
import DraftboardContextProvider from "../context/draftboardContext";

export default function DraftBoard() {
  return (
    <DraftboardContextProvider>
      <Draftboard />
    </DraftboardContextProvider>
  );
}
