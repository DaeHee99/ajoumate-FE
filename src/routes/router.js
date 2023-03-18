import { Route, Routes } from "react-router-dom";
import Category from "../pages/Category";
import ChatRoomPage from "../pages/ChatRoomPage";
import ChatListPage from "../pages/ChatlistPage";
import Main from "../pages/main";

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/category" element={<Category />} />
      <Route path="/chatlist" element={<ChatListPage />} />
      <Route path="/chatroom/:roomNumber" element={<ChatRoomPage />} />
    </Routes>
  );
}
