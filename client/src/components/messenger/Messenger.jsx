import { onConnect, onDisConnect, socket } from "@/socket.io";
import React, { useEffect, useState } from "react";
import { Textarea } from "../ui/textarea";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { SendIcon } from "lucide-react";
import ChatBubble from "../chatbubble/ChatBubble";

const Messenger = ({ username }) => {
  const [online, setOnline] = useState();
  const [joinUser, setJoinUser] = useState([]);


  

  useEffect(() => {
    // socket.emit("login", username);

    // socket.on("users", (users) => {
    //   // setOnline(users);
    //   // setComingUser(Object.values(users));
    //   console.log("-----------------", users);
    // });

    const handleLogin = (data) => {
      socket.emit("login", data);
    }

    const handleJoined = (message) => {
      setJoinUser((prev) => prev.concat(message));
    }
    
    socket.on("userJoined", handleJoined);

    handleLogin(username)
    // handleJoined();


    socket.on("disconnect", () => {
      console.log("User Dosconnected to Client");
    });

    return () => {
      socket.off("login", handleLogin);
      // socket.off("users");
      socket.off("userJoined", handleJoined);
    };
  }, []);

  console.log(joinUser) 
  return (
    <section className="w-full md:w-2/4 h-full border rounded-md relative">
      <div className="flex flex-col h-full">
        <div className="flex-grow overflow-y-auto space-y-2 px-3">
          <ChatBubble />
          <ChatBubble />
          {/* <p>{comingUser} Joined the Chat</p> */}
          {joinUser.map((user, index) => {
            return <p key={index}>{user} Joined the chat</p>;
          })}
        </div>
        <div className="p-4 border-t flex gap-x-2">
          <Input />
          <Button>
            <SendIcon />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Messenger;
