import { Route, Routes } from "react-router-dom";
import Category from "../pages/Category";
import ChatRoomPage from "../pages/ChatRoomPage";
import Main from "../pages/main";

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/category" element={<Category />} />
      <Route path="/chatroom" element={<ChatRoomPage />} />
    </Routes>
  );
}
