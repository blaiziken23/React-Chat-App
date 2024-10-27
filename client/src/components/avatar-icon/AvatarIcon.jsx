import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";

const AvatarIcon = ({ src }) => {
  return (
    <Avatar>
      <AvatarImage src={src || "https://github.com/shadcn.png"} />
      <AvatarFallback>CN</AvatarFallback>
    </Avatar>
  );
};

export default AvatarIcon;
