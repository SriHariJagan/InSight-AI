import React, { useState } from "react";
import styles from "./InputArea.module.css";
import { useTheme } from "../../Store/Context/ThemeContext";

export default function InputArea() {
  const { theme } = useTheme();
  const darkMode = theme === "dark";
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (message.trim() === "") return;

    console.log("Submitted message:", message); // Replace with actual send logic

    // Clear input field after submit
    setMessage("");
  };

  return (
    <form
      className={`${styles.inputArea} ${darkMode ? styles.dark : styles.light}`}
      id="chat-input-form"
      onSubmit={handleSubmit}
    >
      <input
        type="text"
        id="chat-input"
        placeholder="Type your message here..."
        autoComplete="off"
        className={styles.inputField}
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <button type="submit" className={styles.sendBtn} id="send-btn">
        <i className="fas fa-paper-plane"></i>
      </button>
    </form>
  );
}
