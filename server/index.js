import express from "express";
import cors from "cors";
import http from "http";
import { Server } from "socket.io";
import { config } from "./config.js";

const app = express();
const server = http.createServer(app);
const io = new Server(server, config.cors);

app.use(cors());

io.on("connection", (socket) => {
  console.log("User Connected to Server");

  socket.on("disconnect", () => {
    console.log("User Disconnected to Server");
  });
});

server.listen(process.env.PORT, () =>
  console.log(`Listening to PORT ${process.env.PORT}`)
);
