import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from '../pages/main';
import Category from "../pages/Category";

export default function Router() {
  return (
        <Routes>
            <Route path="/" element={<Main/>} />
            <Route path="/category" element={<Category />} />
        </Routes>
  );
}