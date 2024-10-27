import { io } from "socket.io-client";
import { config } from "./config";

export const socket = io("http://localhost:3000");

export const onConnect = () => socket.connect();
export const onDisConnect = () => socket.disconnect();
