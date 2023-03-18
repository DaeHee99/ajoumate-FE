import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "../pages/page"

const Router = () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Main />}></Route>
            </Routes>
        </BrowserRouter>
    )
}

export default router