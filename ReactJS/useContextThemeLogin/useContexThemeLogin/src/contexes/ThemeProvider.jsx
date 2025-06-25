import React, { useState } from "react";
import ThemeContext from "./ThemeContex";

function ThemeProvider({ children }) {
  const [theme, setTheme] = useState("light");
  const toggleTheme = () => {
    setTheme((currentThem) => {
      return currentThem === "light" ? "dark" : "light";
    });
  };
  const themeProviderValues = {
    theme,
    toggleTheme,
  };
  return (
    <ThemeContext.Provider value={themeProviderValues}>
      {children}
    </ThemeContext.Provider>
  );
}

export default ThemeProvider;
