import { useState, useEffect } from "react";
import { auth, initializeApp } from "firebase";
// import { useRouter } from "next/router";

const defaultUser = {
  isLoggedIn: false,
  displayName: "",
};

const firebaseConfig = process.env.FIREBASE_CONFIG;

try {
  initializeApp(firebaseConfig);
} catch (err) {
  console.log("err", err);
}

export default function useAuth() {
  // const Router = useRouter();
  const [user, setUser] = useState(defaultUser);
  // const { isLoggedIn } = user;
  // const query = Router.query;

  // useEffect(() => {
  //   if (!isLoggedIn && !query) {
  //     Router.push("/");
  //   }
  // }, [isLoggedIn, query]);

  function signIn() {
    const provider = new auth.GoogleAuthProvider();
    auth()
      .signInWithPopup(provider)
      .then(res => {
        console.log("signed in");
        setUser({
          isLoggedIn: true,
          displayName: res.user.displayName,
          oAuthId: res.user.uid,
        });
      })
      .catch(err => {
        console.error(err);
        setUser({
          isLoggedIn: false,
          displayName: "",
        });
      });
  }

  function signOut() {
    auth()
      .signOut()
      .then(function () {
        console.log("sign out");
        setUser({
          isLoggedIn: false,
          displayName: "",
        });
      })
      .catch(function (error) {
        console.error(error);
      });
  }

  return {
    user,
    signIn,
    signOut,
  };
}
