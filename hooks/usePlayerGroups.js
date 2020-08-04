import { useState, useEffect } from "react";
import { base } from "../utils/airtableUtils";

export default function usePlayerGroups() {
  const [playerGroups, setPlayerGroups] = useState([]);

  useEffect(() => {
    if (playerGroups.length === 0) {
      base("Players")
        .select({
          view: "Grid view",
        })
        .eachPage(
          function page(records) {
            const players = [];
            records.forEach(function (record) {
              const player = {
                id: record.id,
                ...record.fields,
              };
              players.push(player);
            });
            setPlayerGroups(divideGroups(players));
          },
          function done(err) {
            if (err) {
              console.error(err);
              return;
            }
          }
        );
    }
  }, [playerGroups]);

  function divideGroups(players) {
    const splits = [0, 5, 15, 25, 35, 45, 55, 65, 150];
    let newArray = [];
    // Split playerGroups into groups
    for (let i = 0; i < splits.length; i++) {
      if (splits[i + 1]) {
        let group = players.slice(splits[i], splits[i + 1]);
        // Insert group to each player object
        const updatedGroup = group.map(curr => {
          curr.group = `group-${i + 1}`;
          return curr;
        });
        newArray.push(updatedGroup);
      }
    }

    return newArray;
  }

  return {
    playerGroups,
  };
}
