import { Routes, Route } from "react-router-dom";
import Main from '../pages/main';
import Category from "../pages/Category";
import ChatRoomPage from '../pages/ChatRoomPage';
import Signin from '../pages/Signin';
import Signup from '../pages/Signup';

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<Main/>} />
      <Route path="/category" element={<Category />} />
      <Route path="/chatroom" element={<ChatRoomPage />} />
      <Route path="/signin" element={<Signin />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/mypage" element={<>마이 페이지</>} />
    </Routes>
  );
}
