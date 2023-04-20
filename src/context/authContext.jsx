import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { createContext, useContext, useEffect, useState } from "react";
import { auth } from "../services/firebase-config";

export const  authContext = createContext();

export const useAuth  = () => {
   const context =  useContext(authContext);
   if(!context) throw new Error(" There is not auth provider")
   return context
}

export function AuthProvider ({children}){

    

    const [user, setuser] = useState(null);

    const signUp = (email, password) => 
        createUserWithEmailAndPassword(auth, email, password);

    const login = async (email, password) =>
        signInWithEmailAndPassword(auth, email, password);

    const logout = () => signOut(auth);    
 
    useEffect(()=> {
        onAuthStateChanged(auth,  (user) => {
            if (user) {
                setuser(user);
            }
            console.log('USER',user)
        })
    },[] )

    return (
        <authContext.Provider value={{ signUp, login, user, logout }}>
            { children }
        </authContext.Provider>
    );
}