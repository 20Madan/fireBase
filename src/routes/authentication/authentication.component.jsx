import { useEffect } from "react";
import './authentication.styles.scss'
import SignUpForm from '../../components/sign-up-form/sign-up-form.component'
import SignInForm from '../../components/sign-in-form/sign-in-form.component'

import { getRedirectResult } from "firebase/auth";
import {
auth,
  signInWithGooglePopup,
  createUserDocumentFromAuth,
  signInWithGoogleRedirect,
} from "../../utils/firbase/firebase.utils";

const Authentication = () => {

 
    // const logGoogleRedirectUser = async () => {
    //   const { user } = await signInWithGoogleRedirect();
    //   console.log({ user });
    // };

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await getRedirectResult(auth);
//         console.log(response, "redirect");
//         if (response) {
//             const userDocRef = await createUserDocumentFromAuth(response.user);
//           }
//       } catch (error) {
//         console.error("Error in useEffect:", error);
//       }
//     };
  
//     fetchData();
//   }, []);



  return (
    <div>
      <h1>sign In Page </h1>
      <div  className="authentication-container">
      {/* <button onClick={logGoogleUser}>Sign in with Google Popup</button> */}
    <SignInForm/>
      {/* <button onClick={logGoogleRedirectUser}>Sign in with Google Redirect</button> */}
      {/* <button onClick={signInWithGoogleRedirect}>
        Sign in with Google Redirect
      </button> */}
      <SignUpForm />
      </div>
  
    </div>
  );
};
export default Authentication;
