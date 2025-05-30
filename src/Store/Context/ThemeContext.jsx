import React, { createContext, useState, useContext, useEffect } from "react";

const ThemeContext = createContext();

// Hook to use theme context easily
export function useTheme() {
  return useContext(ThemeContext);
}


export function ThemeProvider({ children }) {

  const [showSidebar, setShowSidebar] = useState(false)


  // Default theme could be read from localStorage or system preference
  const [theme, setTheme] = useState(() => {
    // Try reading saved theme
    const saved = localStorage.getItem("neochat-theme");
    if (saved === "dark" || saved === "light") return saved;

    // fallback: use prefers-color-scheme
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) return "dark";
    return "light";
  });



  useEffect(() => {
    // Save theme to localStorage
    localStorage.setItem("neochat-theme", theme);

    // Update document body class for global theme styling
    document.body.classList.remove(theme === "dark" ? "light" : "dark");
    document.body.classList.add(theme);
  }, [theme]);

  const toggleTheme = () => setTheme(theme === "dark" ? "light" : "dark");


  const toggleSidebar = () => setShowSidebar(prevSate => !prevSate);



  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, showSidebar, toggleSidebar }}>
      {children}
    </ThemeContext.Provider>
  );
}
