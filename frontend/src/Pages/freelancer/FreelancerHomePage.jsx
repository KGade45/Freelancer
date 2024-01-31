import React from "react";
// import { useState, useEffect } from "react"
// import axios from 'axios';
import UserInfo from "../../components/freelancer/UserInfo";
import UserHome from "../../components/freelancer/UserHome";

const FreelancerHomePage = () => {
  return (
    <div >
      <UserInfo />
      <UserHome />
    </div>
  );
};

export default FreelancerHomePage;
