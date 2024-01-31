import React from "react";
import forTalentImg from "../assets/fortalent.jpg";
import { Link } from 'react-router-dom';

function ForTalent() {
  return (
    <div className="drop-shadow-2xl flex lg:flex-row flex-col m-32 p-20 lg:p-16 justify-center">
      <img
        className="rounded-t-lg lg:rounded-l-lg object-cover h-112 w-full"
        src={forTalentImg}
        alt="forTalentImg"
      />
      <div className="bg-gray-700 rounded-b-lg lg:rounded-r-lg p-12 lg:p-16">
        <h2 className="text-white text-2xl lg:text-3xl text-left mb-6 lg:mb-8">
          For Talent
        </h2>
        <h1 className="text-white text-4xl lg:text-5xl text-left mb-8 lg:mb-10 font-semibold font-serif border-solid tracking-normal">
          Find
          <br />
          Great Work
        </h1>
        <p className="text-white font-mono text-lg lg:text-xl font-medium mb-8 lg:mb-10 text-left">
          Meet clients you’re excited to work with and take
          <br /> your career or business to new heights.
        </p>
        <hr className="bg-white h-px w-10/12 mx-auto mb-8 lg:mb-12" />
        <div className="flex justify-start">
          <button className="bg-white text-gray-700 hover:bg-gray-200 py-3 px-6 rounded-full">
            <Link to='/SignUpFreelancer'>
              Find Opportunity
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
}

export default ForTalent;
