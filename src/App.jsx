import { Routes, Route } from "react-router-dom";
import { LandingPage } from "./LandingPage/LandingPage";
import { Login } from "./Auth/Login";
import { DashBoard } from "./Components/DashBoard/DashBoard";
import axios from "axios";

axios.defaults.baseURL = "https://comedor-server.vercel.app/";

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/dashboard" element={<DashBoard />} />
    </Routes>
  );
}

export default App;
