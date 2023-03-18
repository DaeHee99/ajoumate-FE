import { io } from "socket.io-client";

const socket = io("https://ajou-hackathon--qgrwz.run.goorm.site", {
  transports: ["websocket"],
});

export default socket;
