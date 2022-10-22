import React, { createContext, useEffect, useState } from 'react';
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut} from 'firebase/auth';
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
      console.log('user inside state change', currentUser);
      setUser(currentUser)
      setLoading(false)
     })
     return () =>{
      unsubscribe()
     }
 }, [])

 const createUser = (email, password) =>{
     setLoading(true)
     return createUserWithEmailAndPassword(auth, email, password)
 }
  
 const logOut = () =>{
     setLoading(true)
     return signOut(auth)
}

 const signIn = (email, password) =>{
     setLoading(true)
     return signInWithEmailAndPassword(auth, email, password)
 }

    
     const authInfo = {user, providerLogin, logOut,createUser,signIn,loading }
     return (
          <AuthContext.Provider value={authInfo}>
               {children}
          </AuthContext.Provider>
     );
};

export default Authprovider;