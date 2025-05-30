import React from "react";
import styles from "./ChatContainer.module.css";
import ChatHeader from "../ChatHeader/ChatHeader";
import InputArea from "../InputArea/InputArea";
import Messages from "../Message/Messages";
import { useTheme } from "../../Store/Context/ThemeContext";


export default function ChatContainer() {

  const { toggleSidebar, showSidebar } = useTheme()

  const handlesidebar = () => {
    if(showSidebar){
      toggleSidebar()
    }
  }


  return (
    <div className={styles.chatContainer} onClick={handlesidebar}>
      <ChatHeader />
      <Messages />
      <InputArea />
    </div>
  );
}
