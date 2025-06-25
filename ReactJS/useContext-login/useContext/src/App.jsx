import React from "react";
import AuthProvider from "./contexes/AuthProvider";
import LoginLogout from "./components/LoginLogout";

function App() {
  return (
    <AuthProvider>
      <LoginLogout />
    </AuthProvider>
  );
}

export default App;
