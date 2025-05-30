import React from "react";
import styles from "./ChatHeader.module.css";
import { useTheme } from "../../Store/Context/ThemeContext";

export default function ChatHeader() {
  const { theme, showSidebar, toggleSidebar } = useTheme();

  const darkMode = theme === "dark";
  return (
    <div
      className={`${styles.chatHeader} ${darkMode ? styles.dark : styles.light}`}
    >
      <div className={styles.userInfo}>

        {!showSidebar && <button className={styles.showbtn} onClick={() => toggleSidebar()}><i className="fa-solid fa-caret-right" /></button>}

        <img
          src="https://avatars.githubusercontent.com/u/1234567?v=4"
          alt="User Avatar"
          className={styles.avatar}
        />
        <span className={styles.username}>InSight AI</span>
      </div>
    </div>
  );
}
