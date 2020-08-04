import React, { useContext, useEffect } from "react";
import styles from "./home.module.scss";
import Auth from "../auth/auth";
import { AuthContext } from "../../context/authContext";
import { getAirtableData } from "../../utils/airtableUtils";
import { useRouter } from "next/router";

export default function Home() {
  const {
    user: { isLoggedIn, oAuthId },
  } = useContext(AuthContext);

  const Router = useRouter();

  useEffect(() => {
    if (isLoggedIn) {
      getAirtableData("Draft Selections", checkForTeam);
    }
  }, [isLoggedIn]);

  function checkForTeam(records) {
    if (records.length === 0) {
      console.log("No teams exist");
      Router.push("/draftBoard");
    }
    let hasTeam = false;
    for (let i = 0; i < records.length; i++) {
      const record = records[i];
      if (record.fields.userId === oAuthId) {
        hasTeam = true;
      }
    }
    if (hasTeam === true) {
      console.log("User has a team");
      Router.push({
        pathname: "/team",
        query: { userId: oAuthId },
      });
    } else {
      Router.push("/draftBoard");
    }
  }

  return (
    <div className={styles.app}>
      <Auth />
      <h1>Welcome to the Golf Pool</h1>
    </div>
  );
}
