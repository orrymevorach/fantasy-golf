import { useState, useEffect } from "react";
import { auth, initializeApp } from "firebase";
import getConfig from "next/config";
const { publicRuntimeConfig } = getConfig();
// import { useRouter } from "next/router";

const defaultUser = {
  isLoggedIn: false,
  displayName: "",
};

const firebaseConfig = {
  apiKey: publicRuntimeConfig.FIREBASE_API_KEY,
  authDomain: "golf-draft-fdf5b.firebaseapp.com",
  databaseURL: "https://golf-draft-fdf5b.firebaseio.com",
  projectId: "golf-draft-fdf5b",
  storageBucket: "golf-draft-fdf5b.appspot.com",
  messagingSenderId: "696363008338",
  appId: "1:696363008338:web:38f1894846cdf9bd66ba8b",
  measurementId: "G-SLHJKPLPH6",
};

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
