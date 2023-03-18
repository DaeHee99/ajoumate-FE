import { Route, Routes } from "react-router-dom";
import Category from "../pages/Category";
import ChatRoomPage from "../pages/ChatRoomPage";
import ChatListPage from "../pages/ChatlistPage";
import Main from "../pages/main";
import Signin from "../pages/Signin";
import Signup from "../pages/Signup";
import { io } from "socket.io-client";

export default function Router() {
  const socket = io("https://ajou-hackathon--qgrwz.run.goorm.site", {
    transports: ["websocket"],
  });
  socket.on("connect", () => {
    socket.emit("set socketId", "twZHFjXnjU71flgESbL8");
    console.log("a");
  });
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/category" element={<Category />} />
      <Route path="/chatlist" element={<ChatListPage socket={socket} />} />
      <Route
        path="/chatroom/:roomNumber"
        element={<ChatRoomPage socket={socket} />}
      />
      <Route path="/signin" element={<Signin />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/mypage" element={<>마이 페이지</>} />
    </Routes>
  );
}
