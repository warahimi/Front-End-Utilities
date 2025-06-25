import React, { useState } from "react";
import AuthContext from "./AuthContext";

function AuthProvider({ children }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const login = (userName, password) => {
    if (userName === "wahid" && password === "123") {
      setIsLoggedIn(true);
      return "Successfully logged in";
    } else {
      return "Invalid username or password";
    }
  };
  const logout = () => {
    if (isLoggedIn) {
      setIsLoggedIn(false);
    }
  };
  const authProviderValues = { isLoggedIn, login, logout };
  return <AuthContext value={authProviderValues}>{children}</AuthContext>;
}

export default AuthProvider;
