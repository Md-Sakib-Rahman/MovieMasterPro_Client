import React, { useEffect, useState } from "react";
import { Context } from "./Context";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  updateProfile,
  GoogleAuthProvider,
  signInWithPopup,
  signOut
} from "firebase/auth";
import { auth } from "../Firebase/firebase.config";


const ContextProvider = ({ children }) => {
  const [loader, setLoader] = useState(true);
  const [darkmode, setDarkMode] = useState(false);
  const [user, setUser] = useState(null);
  const provider = new GoogleAuthProvider();
  //   fucntions ->
  const signUp = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const login = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const updateUserProfile = (userObj) => {
    return updateProfile(auth.currentUser, userObj);
  };
  const signInWithGoogle = ()=>{
    return signInWithPopup(auth, provider)
  }
  const logOut = ()=>{
    return signOut(auth)
  }
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoader(false)
    });

    return () => unsubscribe();
  }, []);

  const data = {
    loader,
    setLoader,
    signUp,
    login,
    updateUserProfile,
    signInWithGoogle,
    user,
    logOut,
    darkmode, 
    setDarkMode
  };
  return <Context value={data}>{children}</Context>;
};

export default ContextProvider;
