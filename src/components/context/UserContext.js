import React from "react";
import { createContext } from "react";
import app from "../../firebase/Firebase.config";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  GoogleAuthProvider,
  GithubAuthProvider,
  signInWithPopup,
  updateProfile,
} from "firebase/auth";
import { useState } from "react";
import { useEffect } from "react";

export const AuthContext = createContext();
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
const gitHubProvider = new GithubAuthProvider();

const UserContext = ({ children }) => {
  const [user, setUser] = useState({});

  const [loader, setLoader] = useState(true);

  //email address and password to createUserWithEmailAndPassword:
  const registerUser = (email, password) => {
    setLoader(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  //email address and password to signInWithEmailAndPassword:
  const loggedInUser = (email, password) => {
    setLoader(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  //setting an observer on the Auth object:
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoader(false);
    });
    return () => unsubscribe();
  }, []);

  //signInWithPopup with google:
  const signInWithGoogle = () => {
    setLoader(true);
    return signInWithPopup(auth, googleProvider);
  };

  //signInWithPopup with github:
  const signInWithGitHub = () => {
    setLoader(true);
    return signInWithPopup(auth, gitHubProvider);
  };

  //updateProfile method.
  const userProfileUpdate = (userData) => {
    setLoader(true);
    return updateProfile(auth.currentUser, userData);
  };

  //to sign out a user, call signOut:
  const signOutUser = () => {
    setLoader(true);
    return signOut(auth);
  };
  const authInfo = {
    user,
    registerUser,
    loggedInUser,
    signOutUser,
    signInWithGoogle,
    signInWithGitHub,
    userProfileUpdate,
    loader,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default UserContext;
