import { Route, Routes } from "react-router-dom";
import Category from "../pages/Category";
import ChatRoomPage from "../pages/ChatRoomPage";

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<>메인</>} />
      <Route path="/category" element={<Category />} />
      <Route path="/chatroom" element={<ChatRoomPage />} />
    </Routes>
  );
}
