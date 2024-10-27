import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { socket } from "@/socket.io";

const Login = ({ setUsername }) => {
  const [inputUsername, setInputUsername] = useState("");

  const handleInputUsername = (e) => {
    setInputUsername(e.target.value);
  };

  const handleLogin = () => {
    if (!inputUsername) return;

    localStorage.setItem("username", inputUsername);
    setUsername(inputUsername);

    // socket.emit("login", inputUsername);

  };

  return (
    <Card className="w-[350px] mx-auto">
      <CardHeader>
        <CardTitle>Create your Username</CardTitle>
        {/* <CardDescription>Deploy your new project in one-click.</CardDescription> */}
      </CardHeader>
      <CardContent>
        <form>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-2">
              <Label htmlFor="username">Username</Label>
              <Input
                id="username"
                placeholder="Type your username"
                onChange={(e) => handleInputUsername(e)}
              />
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button
          className="w-full"
          onClick={handleLogin}
          disabled={!inputUsername}
        >
          Login
        </Button>
      </CardFooter>
    </Card>
  );
};

export default Login;
