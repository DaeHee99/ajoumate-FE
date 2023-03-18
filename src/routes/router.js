import { Route, Routes } from "react-router-dom";
import Category from "../pages/Category";
import ChatRoomPage from "../pages/ChatRoomPage";
import ChatListPage from "../pages/ChatlistPage";
import Main from "../pages/main";
import Signin from "../pages/Signin";
import Signup from "../pages/Signup";
import WritePage from "../pages/WritePage";

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/category" element={<Category />} />
      <Route path="/chatlist" element={<ChatListPage />} />
      <Route path="/chatroom/:roomNumber" element={<ChatRoomPage />} />
      <Route path="/signin" element={<Signin />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/mypage" element={<>마이 페이지</>} />
      <Route path="/writepage" element={<WritePage />} />
    </Routes>
  );
}
