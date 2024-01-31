import React,{useEffect, useState} from "react";
import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";
import JoinAsClintOrFreelancer from "./pages/JoinAsClintOrFreelancer.jsx";
import Login from "./pages/Login.jsx";
import SignUpFreelancer from "./pages/freelancer/SignUpFreelancer.jsx";
import FreelancerHomePage from "./pages/freelancer/FreelancerHomePage.jsx";
import SignUpClient from "./pages/SignUpClient.jsx";
import Chat from "./pages/Chat.jsx";
import { useDispatch } from "react-redux";
import SignuptofindWork from "./pages/freelancer/SignuptofindWork.jsx";
import { login, logout } from "./store/authSlice"
// import Dashboard from "./pages/client/Dashboard.jsx";

function App() {
  
  const dispatch = useDispatch();
  
  useEffect(() => {
    const userData = localStorage.getItem("user");
    if (userData) {
      dispatch(login({ userData }));
    } else {
      dispatch(logout());
    }
  }, []);
  
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/joinAsClintOrFreelancer"
          element={<JoinAsClintOrFreelancer />}
        />
        <Route path="/login" element={<Login />} />
        {/* <Route path="/dashboard" element={<Dashboard />} /> */}
        <Route path="/signUpFreelancer" element={<SignUpFreelancer />} />
        <Route path="/signUpClient" element={<SignUpClient />} />
        <Route path="/freelancerHomePage" element={<FreelancerHomePage />} />
        <Route path="/signuptofindWork" element={<SignUpFreelancer />} />
        <Route path="/chat" element={<Chat />} />
        <Route path="/about" element={<SignuptofindWork />} />

        {/* <Route path="/dashboard" element={<Dashboard />} /> */}
        {/* <Route path="/" */}

        <Route />
      </Routes>
    </div>
  );
}

export default App;
