import React, { createContext, useEffect, useState } from 'react';
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, sendEmailVerification, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile} from 'firebase/auth';
import app from '../../Components/FIrebase/Firebase.config';




export const AuthContext = createContext();

const auth = getAuth(app);

//google sign in 
const providerLogin = (provider) =>{
     return signInWithPopup(auth, provider);
}


const Authprovider = ({children}) => {
     const [user, setUser] = useState(null)
     const [loading, setLoading] = useState(false)

     //get user 
useEffect(()=>{
     const unsubscribe = onAuthStateChanged(auth, (currentUser) =>{
      if( currentUser === null ||  currentUser.emailVerified){
          setUser(currentUser)
      }
      setLoading(false)
     })
     return () =>{
      unsubscribe()
     }
 }, [])

 //create usre function
 const createUser = (email, password) =>{
     setLoading(true)
     return createUserWithEmailAndPassword(auth, email, password)
 }
  

 //logout function
 const logOut = () =>{
     setLoading(true)
     return signOut(auth)
}


//sign in function
 const signIn = (email, password) =>{
     setLoading(true)
     return signInWithEmailAndPassword(auth, email, password)
 }

 //update profile user 
 const updateUserProfile = (profile) =>{
     return updateProfile(auth.currentUser, profile);
 }
    
 //email varification function
 const varifyEmail = () =>{
     return sendEmailVerification(auth.currentUser);
 }
     const authInfo = {user,
           providerLogin,
           logOut,
           createUser,
           signIn,
           loading,
           updateUserProfile,
           varifyEmail,
           setLoading
           }
     return (
          <AuthContext.Provider value={authInfo}>
               {children}
          </AuthContext.Provider>
     );
};

export default Authprovider;