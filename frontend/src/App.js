import "./App.css";
import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";
import JoinAsClintOrFreelancer from "./pages/JoinAsClintOrFreelancer";
import Login from "./pages/Login";
import SignUpFreelancer from "./pages/SignUpFreelancer";
import FreelancerHomePage from "./pages/FreelancerHomePage";
import SignUpClient from "./pages/SignUpClient";
import SignuptofindWork from "./pages/ SignuptofindWork";
import Chat from "./pages/Chat";

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
        {/* <Route path="/" */}
        <Route />
      </Routes>
    </div>
  );
}

export default App;
