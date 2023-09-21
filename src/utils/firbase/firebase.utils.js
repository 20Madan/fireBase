import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import { getFirestore, doc, setDoc, getDoc } from "firebase/firestore"; //firestore functions

const firebaseConfig = {
  apiKey: "AIzaSyAhkhKlSclClF10LwkuJ1T9_x2tw-uvwHk",
  authDomain: "crwn-clothing-db-fb1b2.firebaseapp.com",
  projectId: "crwn-clothing-db-fb1b2",
  storageBucket: "crwn-clothing-db-fb1b2.appspot.com",
  messagingSenderId: "1057692595767",
  appId: "1:1057692595767:web:37cc8ec4607ffbbe56f1b2",
};

// Initialize Firebase (instance)
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider(); //selected google provider as a provider
provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
export const signInWithGoogleRedirect = () =>
  signInWithRedirect(auth, provider);

//create db for firebase store
export const db = getFirestore();
export const createUserDocumentFromAuth = async (
  userAuth,
  additionalInformation = {}
) => {
  //initialy if there is any data exists
  const userDocRef = doc(db, "users", userAuth.uid); //users-collection
  console.log(userDocRef, "userDocRef");
  const userSnapshot = await getDoc(userDocRef);
  console.log(userSnapshot);
  console.log(userSnapshot.exists()); //checking for empty collection or not

  //if user data dose not exist
  if (!userSnapshot.exists()) {
    //create / set the document with the data from userAuth in my collection
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
        ...additionalInformation,
      });
    } catch (error) {
      console.log("Error creating user:", error.message);
    }
  }
  //if user data exist
  return userDocRef;
};
//create-User-With-Email-And-Password
export const createAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;

  return await createUserWithEmailAndPassword(auth, email, password);
};

//sign-In-With-Email-And-Password
export const signInAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;

  return await signInWithEmailAndPassword(auth, email, password);
};
//sign-out method
export const signOutUser = async () => await signOut(auth);
//on-auth-state-changed
export const onAuthStateChangedListener = (callback) =>
  onAuthStateChanged(auth, callback);
