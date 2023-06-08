import { Routes, Route } from "react-router-dom";
import {LandingPage} from "./LandingPage/LandingPage";
import { Login } from "./Auth/Login";
import { DashBoard } from "./Components/DashBoard/DashBoard";

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
