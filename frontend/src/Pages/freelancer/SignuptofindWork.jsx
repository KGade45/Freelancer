("use client");
import React, {useState} from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

function SignuptofindWork() {
  const {userid} = useParams();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    userid,
    education: "",
    domain: "",
    skills: "",
    experience: "",
    portFolio: "",
    charges : ""
  });

  const handleChange = (e)=>{
    const {name, value} = e.target;
    setFormData((prev)=>(
      {...prev,
        [name]: value
      }
    ))
  }

  const handleSubmit = async (e)=>{
    e.preventDefault();
    try {
      console.log("Form data ", formData);
      const res = await axios.post("/users/about", formData);
      navigate("/freelancerHomePage")
    } catch (error) {
      console.error("Request failed:", error.message);
      console.error("Server response:", error.response.data);
    }
  }


  return (
    <>
      <div className="min-h-screen bg-gray-50 flex flex-col  py-12 sm:px-6 lg:px-8">
        <div className="sm:mx-auto sm:w-full  sm:max-w-md">
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Sign up to find work you love
          </h2>
        </div>

        <div className="mt-8 sm:mx-auto sm:w-full m-4 sm:max-w-md">
          <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
            <div>
              <form onSubmit={handleSubmit} className="space-y-6" action="#" method="POST">
                <div>
                  <label
                    htmlFor="Education"
                    className="flex  mb-3 justify-start text-sm font-medium text-gray-700"
                  >
                    Education
                  </label>
                  <div className="mt-1">
                    <input
                      name="education"
                      id="Education"
                      required
                      onChange={handleChange}
                      className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm"
                    />
                  </div>
                </div>

                <div className="">
                  <label
                    htmlFor="Skills"
                    className="flex mb-3 justify-start  text-sm font-medium text-gray-700"
                  >
                    Skills
                  </label>
                  <div className="mt-1">
                    <input
                      name="skills"
                      id="Skills"
                      onChange={handleChange}
                      required
                      className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="portFolio"
                    className="flex mb-3 justify-start text-sm font-medium text-gray-700"
                  >
                    portFolio
                  </label>
                  <div className="mt-1">
                    <input
                      name="portFolio"
                      id="portFolio"
                      onChange={handleChange}
                      required
                      className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="Domain"
                    className="flex mb-3 justify-start text-sm font-medium text-gray-700"
                  >
                    Domain
                  </label>
                  <div className="mt-1">
                    <input
                      name="domain"
                      id="Domain"
                      onChange={handleChange}
                      required
                      className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm"
                    />
                  </div>
                </div>

                <div className="">
                  <label
                    htmlFor="Experience"
                    className="flex mb-3 justify-start  text-sm font-medium text-gray-700"
                  >
                    Experience
                  </label>
                  <div className="mt-1">
                    <input
                      name="experience"
                      id="Experience"
                      required
                      onChange={handleChange}
                      className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="charges  "
                    className="flex mb-3 justify-start text-sm font-medium text-gray-700"
                  >
                    charges
                  </label>
                  <div className="mt-1">
                    <input
                      name="charges"
                      id="charges"
                      onChange={handleChange}
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
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SignuptofindWork;
