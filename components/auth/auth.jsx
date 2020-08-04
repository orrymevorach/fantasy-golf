import React, { useContext } from "react";
import { AuthContext } from "../../context/authContext";
import styles from "./auth.module.scss";

export default function Auth() {
  const {
    user: { isLoggedIn, displayName },
    signOut,
    signIn,
  } = useContext(AuthContext);
  return (
    <div className={styles.auth}>
      {isLoggedIn ? (
        <>
          <p>{displayName}</p>
          <button onClick={signOut}>Sign Out</button>
        </>
      ) : (
        <button onClick={signIn}>Sign In</button>
      )}
    </div>
  );
}
