import React, { useState } from "react";
import styles from "./Sidebar.module.css";
import { useTheme } from "../../Store/Context/ThemeContext";

export default function Sidebar() {
  const { theme, toggleTheme, showSidebar, toggleSidebar } = useTheme();
  const darkMode = theme === "dark";

  const [chatList, setChatList] = useState([
    { id: 1, name: "Chat with Alice" },
    { id: 2, name: "Project Ideas" },
    { id: 3, name: "Daily Notes" },
  ]);

  // Counter for unique chat ID
  const [chatCounter, setChatCounter] = useState(4);

  const handleNewChat = () => {
    const newChat = {
      id: chatCounter,
      name: `New Chat ${chatCounter}`,
    };
    // Add new chat to top
    setChatList((prevChats) => [newChat, ...prevChats]);
    setChatCounter((prev) => prev + 1);
  };

  return (
    <div
      className={`${styles.sidebar} ${darkMode ? styles.dark : styles.light} ${
        showSidebar ? styles.show : styles.hide
      }`}
    >
      <div className={styles.logo}>
        <i className={`fas fa-robot ${styles.logoIcon}`}></i>
        <span>InSight AI</span>

        {showSidebar && (
          <button className={styles.showbtn} onClick={toggleSidebar}>
            <i className="fa-solid fa-caret-left" />
          </button>
        )}
      </div>

      <button id="new-chat" className={styles.newChatBtn} onClick={handleNewChat}>
        <i className={`fas fa-plus ${styles.iconSpin}`}></i>
        <span>New Chat</span>
      </button>

      <div className={styles.historyContainer}>
        <h3>Chat History</h3>
        <div id="chat-history" className={styles.chatList}>
          {chatList.map((chat) => (
            <div key={chat.id} className={styles.chatItem}>
              <i className="fas fa-comment-alt"></i>
              <span>{chat.name}</span>
            </div>
          ))}
        </div>
      </div>

      <div className={styles.settings}>
        <button id="clear-history" className={styles.settingsBtn}>
          <i className="fas fa-trash"></i>
          <span>Clear History</span>
        </button>

        <button
          id="toggle-theme"
          className={styles.settingsBtn}
          onClick={toggleTheme}
          aria-label="Toggle dark/light mode"
        >
          <i className={`fas ${darkMode ? "fa-moon" : "fa-sun"}`}></i>
          <span>{darkMode ? "Dark Mode" : "Light Mode"}</span>
        </button>
      </div>
    </div>
  );
}
