import React from "react";

import styles from "./App.module.css";
import Sidebar from "./Components/Sidebar/Sidebar";
import ChatContainer from "./Components/ChatContainer/ChatContainer";
import { useTheme } from "./Store/Context/ThemeContext";

export default function App() {
  const { showSidebar } = useTheme();

  return (
    <div className={styles.container}>
      {showSidebar && <Sidebar />}
      <ChatContainer />
    </div>
  );
}

