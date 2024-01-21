import "./App.css";
import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";
import JoinAsClintOrFreelancer from "./pages/JoinAsClintOrFreelancer.jsx";
import Login from "./pages/Login.jsx";
import SignUpFreelancer from "./pages/SignUpFreelancer.jsx";
import FreelancerHomePage from "./pages/FreelancerHomePage.jsx";
import SignUpClient from "./pages/SignUpClient.jsx";
import SignuptofindWork from "./pages/SignuptofindWork.jsx";
import Chat from "./pages/Chat.jsx";
// import Dashboard from "./pages/Dashboard.jsx";

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

        {/* <Route path="/dashboard" element={<Dashboard />} /> */}
        {/* <Route path="/" */}

        <Route />
      </Routes>
    </div>
  );
}

export default App;
