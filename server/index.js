import express from "express";
import cors from "cors";
import http from "http";
import { Server } from "socket.io";
import { config } from "./config.js";

const app = express();
const server = http.createServer(app);

const io = new Server(server, {
  cors: config.cors.origin,
  // cors: {
  //   origin: "https://s71kbkqw-5173.asse.devtunnels.ms/"
  // }
});

app.use(cors());

const users = [];

io.on("connection", (socket) => {
  // Handle user registration
  socket.on("login", (username) => {
    
    users.push({ id: socket.id, username });

    // users[socket.id] = username; // Store user by socket ID
    // socket.emit("registered", { success: true, username });
    console.log(`${username} Login`);
    console.log("_____________________", users);
    // socket.broadcast.emit("users", users);
    io.emit("userJoined", username);
  });

  // Broadcast messages to all clients
  socket.on("send_message", (message) => {
    const username = users[socket.id];
    if (username) {
      io.emit("receive_message", { username, message });
    }
  });

  socket.on("disconnect", () => {
    const username = users[socket.id];
    delete users[socket.id];
    console.log(`${username} disconnected`);
    socket.emit("users", users);
    console.log("_____________________", users);
  });

  // socket.on("username", (value) => {
  //   io.emit("username", value);
  //   console.log(`${value} is Connected to Server`);
  // });

  // socket.on("disconnect", () => {
  //   console.log("User Disconnected to Server");
  // });
});

app.get("/", (req, res) => {
  res.send("Hello World");
});

server.listen(process.env.PORT, () =>
  console.log(`Listening to PORT ${process.env.PORT}`)
);
