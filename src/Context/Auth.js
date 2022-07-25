import React, { useState } from "react";
import { auth, db } from "../firebase/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
export const AuthContext = React.createContext();

function AuthProviders({ children }) {
  
    const users = auth.currentUser;
    return (
        <AuthContext.Provider value={{ users}}>
          {children}
        </AuthContext.Provider>
       
      );
}

export default AuthProviders;