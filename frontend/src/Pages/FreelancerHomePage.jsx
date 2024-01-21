import React, { useState, useEffect } from "react";
import axios from 'axios';
import UserInfo from "../components/UserInfo";
import UserHome from "../components/UserHome";

const FreelancerHomePage = () => {
  return (
    <div >
      <UserInfo />
      <UserHome />
    </div>
  );
};

export default FreelancerHomePage;
