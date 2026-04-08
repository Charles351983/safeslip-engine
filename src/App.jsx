import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import PortalPage from "./pages/PortalPage";
import MemberPage from "./pages/MemberPage";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/portal" element={<PortalPage />} />
        <Route path="/member" element={<MemberPage />} />
      </Routes>
    </BrowserRouter>
  );
}
