import { Route, Routes } from "react-router-dom";
import Category from "../pages/Category";
import CategoryDetail from "../pages/CategoryDetail";
import ChatRoomPage from "../pages/ChatRoomPage";
import ChatListPage from "../pages/ChatlistPage";
import Main from "../pages/main";
import Signup from "../pages/Signup";
import Signin from "../pages/Signin";
import MyPage from "../pages/MyPage";
import WritePage from "../pages/WritePage";
import Splash from "../pages/Splash";

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<Splash />} />
      <Route path="/home" element={<Main />} />
      <Route path="/category" element={<Category />} />
      <Route path="/category/:type" element={<CategoryDetail />} />
      <Route path="/chatlist" element={<ChatListPage />} />
      <Route path="/chatroom/:roomNumber" element={<ChatRoomPage />} />
      <Route path="/signin" element={<Signin />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/mypage" element={<MyPage />} />
      <Route path="/writepage" element={<WritePage />} />
    </Routes>
  );
}
