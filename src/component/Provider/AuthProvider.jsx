import { createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types';
import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { auth } from "../firebase.config";
export const AuthContext = createContext({})
const AuthProvider = ({children}) => {
    const [user,setUser]=useState({})
    const googleProvider = new GoogleAuthProvider();
    //direct google login 
    const googleLogin =()=>{
        return signInWithPopup(auth,googleProvider)
    }
    //create account signIn
    const googleSignUp = (email,password)=>{
        return createUserWithEmailAndPassword(auth,email,password)
    }
    //login with email password
    const logInEmailPassword = (email,password)=>{     
        return signInWithEmailAndPassword(auth,email,password)
    }
    //account signOut
    const signOutUser = ()=>{
        return signOut(auth)
    }
    //observe user
    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth,currentUser=>{
            setUser(currentUser)
            console.log('observation user',currentUser)
        })
        return ()=>{
            unSubscribe()
        }
    },[])


    console.log(user)

    const authInfo ={
        googleLogin,
        googleSignUp,
        logInEmailPassword,
        signOutUser,
        user
        
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};


AuthProvider.propTypes = {
    children: PropTypes.node,
}
export default AuthProvider;