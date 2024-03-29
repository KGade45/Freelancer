("use client");
import React, { useState } from "react";
import logo from "../assets/logo.png";
import { Navbar } from "flowbite-react";
import axios from "axios";
import {useNavigate, Link} from "react-router-dom"


function SignUpClient() {

  const navigate = useNavigate()

  const [user,setUser] = useState({
    name: "",
    email: "",
    password: "",
    company: "",
    contactNumber:"",
  })

  const handleChange = (e)=>{
    const {name, value} = e.target;
    setUser((prev)=>({
      ...prev,
      [name]: value
    }))
  }


  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log("Form Data: ", user);
      const res = await axios.post('/client/register', user);

      navigate(`/dashboard`);
    } catch (error) {
      console.error("Request failed:", error.message);
      console.error("Server response:", error.response.data);
    }
  };



  return (
    <>
      <Navbar fluid rounded className=" bg-slate-50">
        <Navbar.Brand href="/">
          <img alt="Logo" className="mr-3 p-1 h-6 sm:h-9" src={logo} />
        </Navbar.Brand>
        <div className="flex justify-end">
          <div className="flex md:order-2 mr-8">
            <Navbar.Toggle />
          </div>
          
        </div>
      </Navbar>

      <div className="min-h-screen bg-gray-50 flex flex-col  py-12 sm:px-6 lg:px-8">
        <div className="sm:mx-auto sm:w-full  sm:max-w-md">
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Sign up to hire talent
          </h2>
        </div>

        <div className="mt-8 sm:mx-auto sm:w-full m-4 sm:max-w-md">
          <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
            <div>
              <form className="space-y-6" action="#" method="POST">
                <div>
                  <label
                    htmlFor="name"
                    className=" flex mb-3 justify-start text-sm font-medium text-gray-700"
                  >
                    name
                  </label>
                  <div className="mt-1">
                    <input
                      id="name"
                      name="name"
                      type="name"
                      onChange={(e) => {
                        setUser({ ...user, name:e.target.value })
                      }}
                      required
                      className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm"
                    />
                  </div>
                </div>

                <div className="">
                  <label
                    htmlFor="email"
                    className="flex mb-3 justify-start  text-sm font-medium text-gray-700"
                  >
                    Email address
                  </label>
                  <div className="mt-1">
                    <input
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      onChange={(e) => {
                        setUser({ ...user, email:e.target.value })
                      }}
                      required
                      className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="password"
                    className="flex mb-3 justify-start text-sm font-medium text-gray-700"
                  >
                    Password
                  </label>
                  <div className="mt-1">
                    <input
                      id="Password"
                      onChange={(e) => {
                        setUser({ ...user, password:e.target.value })
                      }}
                      required
                      className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="Company"
                    className=" flex mb-3 justify-start text-sm font-medium text-gray-700"
                  >
                    Company
                  </label>
                  <div className="mt-1">
                    <input
                      id="name"
                      name="name"
                      type="name"
                      onChange={(e) => {
                        setUser({ ...user, company:e.target.value })
                      }}
                      required
                      className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm"
                    />
                  </div>
                </div>

                <div className="">
                  <label
                    htmlFor="JobTitle"
                    className="flex mb-3 justify-start  text-sm font-medium text-gray-700"
                  >
                    Job title
                  </label>
                  <div className="mt-1">
                    <input
                      id="JobTitle"
                      required
                      className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="ContactNumber"
                    className=" flex mb-3 justify-start text-sm font-medium text-gray-700"
                  >
                    Contact number
                  </label>
                  <div className="mt-1">
                    <input
                      id="ContactNumber"
                      required
                      className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm"
                    />
                  </div>
                </div>

                <div>
                  <button
                    type="submit"
                    className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white  bg-green-400 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-400"
                  >
                    Register
                  </button>
                </div>
              </form>

              <div className="mt-6">
                <div className="relative">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-gray-300" />
                  </div>
                  <div className="relative flex justify-center text-sm">
                    <span className="px-2 bg-white text-gray-500">
                      Don't have an FMP account?
                    </span>
                  </div>
                </div>
              </div>
              <div>
                <Link to="/login">
                  <button className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-green-400 hover:bg-green-700 focus:outline-none focus:ring-2 mt-4 focus:ring-offset-2 focus:ring-green-500">
                    Login
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SignUpClient;
