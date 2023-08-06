import "./App.css";
import Home from "./Pages/Home";
import { Route, Routes } from "react-router-dom";
import JoinAsClintOrFreelancer from "./Pages/JoinAsClintOrFreelancer.jsx";
import Login from "./Pages/Login.jsx";
import SignUpFreelancer from "./Pages/SignUpFreelancer.jsx";
import FreelancerHomePage from "./Pages/FreelancerHomePage.jsx";
import SignUpClient from "./Pages/SignUpClient.jsx";
import SignuptofindWork from "./Pages/SignuptofindWork.jsx";
import Chat from "./Pages/Chat";
import Dashboard from "./Pages/Dashboard";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/joinAsClintOrFreelancer"
          element={<JoinAsClintOrFreelancer />}
        />
        <Route path="/login" element={<Login />} />
        <Route path="/signUpFreelancer" element={<SignUpFreelancer />} />
        <Route path="/signUpClient" element={<SignUpClient />} />
        <Route path="/freelancerHomePage" element={<FreelancerHomePage />} />
        <Route path="/signuptofindWork" element={<SignuptofindWork />} />
        <Route path="/chat" element={<Chat />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route />
      </Routes>
    </div>
  );
}

export default App;
