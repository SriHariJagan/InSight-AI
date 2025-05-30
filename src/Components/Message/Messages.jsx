import React, { useEffect, useRef, useState } from "react";
import styles from "./Messages.module.css";
import { useTheme } from "../../Store/Context/ThemeContext";

export default function Messages() {
  const { theme } = useTheme();
  const darkMode = theme === "dark";

  // Sample conversation state: array of message objects
  const [messages, setMessages] = useState([
    { id: 1, from: "bot", text: "Hi! I’m NeoChat AI. Feel free to ask me anything." },
    { id: 2, from: "user", text: "Hello! How can I assist you today?" },
    { id: 3, from: "bot", text: "You can ask me about AI, coding, or anything else." },
  ]);

  const bottomRef = useRef(null);

  // Auto-scroll to bottom when messages change
  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <div className={`${styles.messages} ${darkMode ? styles.dark : styles.light}`}>
      {messages.map((msg) => (
        <div
          key={msg.id}
          className={msg.from === "user" ? styles.messageUser : styles.messageBot}
        >
          <div className={styles.messageContent}>{msg.text}</div>
        </div>
      ))}

      {/* Dummy div to scroll into view */}
      <div ref={bottomRef} />
    </div>
  );
}
