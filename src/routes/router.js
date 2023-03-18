import { Route, Routes } from "react-router-dom";
import Category from "../pages/Category";

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<>메인</>} />
      <Route path="/category" element={<Category />} />
    </Routes>
  );
}
