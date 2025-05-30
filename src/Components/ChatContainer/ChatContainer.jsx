import React from "react";
import styles from "./ChatContainer.module.css";
import ChatHeader from "../ChatHeader/ChatHeader";
import InputArea from "../InputArea/InputArea";
import Messages from "../Message/Messages";


export default function ChatContainer() {

  return (
    <div className={styles.chatContainer}>
      <ChatHeader />
      <Messages />
      <InputArea />
    </div>
  );
}
