import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { getAirtableData } from "../../utils/airtableUtils";
import { isEmpty } from "../../utils/general";
import styles from "./teamPortal.module.scss";
import Column from "./column/column";

export default function TeamPortal() {
  const [teamData, setTeamData] = useState({});
  const {
    query: { userId },
  } = useRouter();

  function formatTeam(fields) {
    let team = [];
    for (let i = 0; i < fields.players.length; i++) {
      const player = {
        name: fields["name (from Players)"][i],
        flag: fields["flag (from Players)"][i],
        ranking: fields["flag (from Players)"][i],
      };
      team.push(player);
    }
    return team;
  }

  useEffect(() => {
    if (userId) {
      getAirtableData("Draft Selections", callback);
    }

    function callback(records) {
      records.forEach(function ({ fields }) {
        if (fields.userId === userId) {
          setTeamData(fields);
        }
      });
    }
  }, [userId]);

  const name = "name (from Players)";
  const ranking = "ranking (from Players)";

  return (
    <div className={styles.teamPage}>
      <div className={styles.playerChart}>
        {!isEmpty(teamData) && (
          <div className={styles.columns}>
            <Column
              heading="Ranking"
              data={teamData[ranking]}
              style={{ width: "100px" }}
            />

            <Column
              heading="Players"
              data={teamData[name]}
              style={{ width: "200px" }}
            />

            <Column heading="R1" data={[]} style={{ width: "100px" }} />
            <Column heading="R2" data={[]} style={{ width: "100px" }} />
            <Column heading="R3" data={[]} style={{ width: "100px" }} />
            <Column heading="R4" data={[]} style={{ width: "100px" }} />
            <Column heading="TOT" data={[]} style={{ width: "100px" }} />
          </div>
        )}
      </div>
    </div>
  );
}
