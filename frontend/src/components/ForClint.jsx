import React from 'react';
import { Link } from 'react-router-dom';

function ForClient() {
  return (
    <div className="flex my-20 mb-0 p-28  justify-end">
      <div className="rounded card__bg__image p-8">
        <div>
          <h2 className="text-white text-left mt-8 text-3xl font-inria-serif">
            For Clients
          </h2>

          <h1 className="text-white text-shadow font-inria-serif text-7xl font-normal text-left mt-20">
            Find Talent
            <br />
            Your Way
          </h1>

          <p className="text-white text-left mt-14 font-calibri text-lg font-normal leading-8 tracking-wide">
            Work with the largest network of independent <br />
            professionals and get things done—from quick <br />
            turnarounds to big transformations.
          </p>
        </div>
        <div className="flex mt-11 justify-start">
          <div className="w-48 mx-10 h-12 flex-shrink-0 rounded-md bg-green-500 m-4 text-center">
            <Link to='/SignUpClient' className="text-white font-bold flex items-center justify-center h-full">
              Join as Client
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ForClient;
