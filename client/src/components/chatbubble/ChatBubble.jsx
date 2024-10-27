import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import ChatContent from "./ChatContent";
import AvatarIcon from "../avatar-icon/AvatarIcon";

const ChatBubble = ({ message, username }) => {

  const isMe = localStorage.getItem("username");

  // console.log(isMe)

  return (
    <div className="flex items-start gap-2.5">
      <AvatarIcon />
      <ChatContent message={message} username={username} />
    </div>
  );
};

export default ChatBubble;
