import React from "react";
import Home from "./components/Home";
import AuthProvider from "./contexes/AuthProvider";
import ThemeProvider from "./contexes/ThemeProvider";

function App() {
  return (
    <AuthProvider>
      <ThemeProvider>
        <Home />
      </ThemeProvider>
    </AuthProvider>
  );
}

export default App;
