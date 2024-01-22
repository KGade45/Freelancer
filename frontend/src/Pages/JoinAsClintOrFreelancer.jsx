("use client");
import React from "react";
import logo from "../assets/logo.png";
import { Navbar } from "flowbite-react";
import { Link, useNavigate } from "react-router-dom";

function JoinAsClintOrFreelancer() {
  const [selectedRole, setSelectedRole] = React.useState(null);
  const navigate = useNavigate();
  
  const handleJoin = (role) => {
    // Handle the join action based on the selected role (client or freelancer)
    console.log(`Join as ${role}`);
    setSelectedRole(role);
  };


  const handleCreateAccount = () => {
    if (selectedRole === "client") {
      // Navigate to the client registration page
      navigate("/signUpClient");
    } else if (selectedRole === "freelancer") {
      // Navigate to the freelancer registration page
      navigate("/signUpFreelancer");
    }
  };

  return (
    <>
      <Navbar fluid rounded className=" bg-slate-50">
        <Navbar.Brand href="/">
          <img alt="Logo" className="mr-3 p-1 h-6 sm:h-9" src={logo} />
        </Navbar.Brand>
        <div className="flex justify-end">
          <div className="flex md:order-2">
            <Navbar.Toggle />
          </div>
          <Navbar.Collapse></Navbar.Collapse>
        </div>
      </Navbar>

      <div className=" bg-slate-50 min-h-screen flex items-start relative pt-10 justify-center">
        <div className="bg-white border rounded-lg shadow-lg p-8">
          <h1 className="text-3xl font-bold mb-6">
            Join as a client or freelancer
          </h1>

          <div className="flex mb-8">
            <div
              className={`mr-8 shadow-md rounded-lg p-6 m-4 cursor-pointer ${selectedRole === "client" ? "bg-gray-200" : ""
                }`}
              onClick={() => handleJoin("client")}
            >
              <div className="flex items-center justify-around mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="85"
                  height="56"
                  viewBox="0 0 85 56"
                  fill="none"
                >
                  <path
                    d="M76.8895 20.3233C81.3166 17.4067 79.2979 14 76.8895 12.3433L66.2645 5.34334C61.802 2.42667 56.6666 3.75667 54.152 5.34334L48.1312 9.33334H38.9583C32.2291 9.33334 28.3333 11.6667 26.3499 14.35L10.6249 24.71V34.0433L8.11036 35.6767C3.68328 38.6167 5.70203 42 8.11036 43.6567L18.7354 50.6567C20.6479 51.9167 22.702 52.3833 24.6499 52.3833C27.1645 52.3833 29.4666 51.5667 30.8479 50.6567L40.4104 44.3333H53.1249C59.1458 44.3333 62.1916 41.86 63.2895 39.4333C67.2916 38.7333 69.4874 36.7267 70.3729 34.7667C75.8624 33.8333 77.9166 30.4033 77.9166 28V21H75.827L76.8895 20.3233ZM70.8333 28C70.8333 29.05 70.1604 30.3333 67.2916 30.3333H63.7499V32.6667C63.7499 33.7167 63.077 35 60.2083 35H56.6666V37.3333C56.6666 38.3833 55.9937 39.6667 53.1249 39.6667H37.5062L25.8895 47.32C24.7916 47.9967 24.1541 47.6 23.7645 47.3433L13.1749 40.39C12.1479 39.6667 12.7499 39.2467 13.1395 38.99L17.7083 35.9567V26.6233L24.7916 21.9567V25.6667C24.7916 28.49 27.6249 32.6667 35.4166 32.6667C43.2083 32.6667 46.0416 28.49 46.0416 25.6667H70.8333V28ZM71.8604 17.01L65.8395 21H38.9583V25.6667C38.9583 26.7167 38.2854 28 35.4166 28C32.5479 28 31.8749 26.7167 31.8749 25.6667V18.6667C31.8749 17.5933 32.477 14 38.9583 14H51.0354L59.1104 8.68001C60.2083 8.00334 60.8458 8.40001 61.2354 8.65667L71.8249 15.61C72.852 16.3333 72.2499 16.7533 71.8604 17.01Z"
                    fill="black"
                  />
                </svg>
                <input
                  name="notification-method"
                  type="radio"
                  className="focus:ring-green-500 h-4 w-4 text-green-600 border-gray-300"
                />
                {selectedRole === "client" && (
                  <div className="bg-green-500 w-3 h-3 rounded-full"></div>
                )}
              </div>
              <p className="ml-2">I’m a client, hiring for a project</p>
            </div>
            <div
              className={`shadow-md rounded-lg p-6 m-4 cursor-pointer ${selectedRole === "freelancer" ? "bg-gray-200" : ""
                }`}
              onClick={() => handleJoin("freelancer")}
            >
              <div className="flex items-center justify-around mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="72"
                  height="52"
                  viewBox="0 0 72 52"
                  fill="none"
                >
                  <path
                    d="M29.34 33.2692H33.78L29.34 36.4758V39.6825L38.22 33.2692H42.66L29.34 42.8892H33.78L42.66 36.4758V39.6825L38.22 42.8892H42.66M58.5 14.8633L62.37 12.09C63.2173 11.4766 63.6926 10.6452 63.6912 9.77867C63.6898 8.91218 63.2118 8.08157 62.3625 7.46959C61.5131 6.8576 60.3619 6.51436 59.1622 6.51538C57.9624 6.51639 56.8123 6.86158 55.965 7.475L52.14 10.2917C47.4426 7.8457 41.7984 6.52944 36.0075 6.52944C30.2165 6.52944 24.5724 7.8457 19.875 10.2917L16.02 7.5075C15.147 6.88363 13.9777 6.52337 12.75 6.5C11.8512 6.49397 10.9705 6.68246 10.2214 7.04119C9.47226 7.39992 8.88906 7.91244 8.54691 8.51272C8.20477 9.113 8.11936 9.77352 8.3017 10.4092C8.48404 11.0448 8.92577 11.6265 9.56996 12.0792L13.5 14.8525C10.1031 18.2596 8.28157 22.354 8.29496 26.5525V30.6692H63.795V26.5525C63.7628 22.3524 61.9112 18.265 58.5 14.8633ZM28.695 22.4467C28.6979 23.0749 28.4427 23.6897 27.9616 24.2131C27.4805 24.7365 26.7951 25.145 25.9923 25.3869C25.1895 25.6288 24.3053 25.6932 23.4518 25.572C22.5982 25.4507 21.8137 25.1493 21.1976 24.7058C20.5814 24.2623 20.1613 23.6968 19.9905 23.0807C19.8197 22.4647 19.9059 21.826 20.2381 21.2453C20.5703 20.6647 21.1336 20.1683 21.8567 19.819C22.5798 19.4698 23.4301 19.2833 24.3 19.2833C25.4604 19.2804 26.5754 19.6091 27.4016 20.1977C28.2277 20.7863 28.6981 21.5869 28.71 22.425L28.695 22.4467ZM47.67 25.61C46.8037 25.61 45.9569 25.4245 45.2366 25.0769C44.5163 24.7293 43.9549 24.2352 43.6234 23.6572C43.2919 23.0792 43.2051 22.4432 43.3741 21.8295C43.5431 21.2159 43.9603 20.6523 44.5728 20.2099C45.1854 19.7675 45.9658 19.4662 46.8155 19.3441C47.6651 19.2221 48.5458 19.2847 49.3461 19.5241C50.1465 19.7636 50.8305 20.169 51.3118 20.6892C51.7931 21.2094 52.05 21.821 52.05 22.4467C52.0421 23.28 51.5792 24.0774 50.7619 24.6657C49.9445 25.2539 48.8388 25.5855 47.685 25.5883L47.67 25.61Z"
                    stroke="black"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                <input
                  name="notification-method"
                  type="radio"
                  className="focus:ring-green-500 h-4 w-4 text-green-600 border-gray-300"
                />
                {selectedRole === "freelancer" && (
                  <div className="bg-green-500 w-3 h-3 rounded-full"></div>
                )}
              </div>
              <p className="ml-2 display-block">
                I’m a freelancer, looking for work
              </p>
            </div>
          </div>

          <div className="flex flex-col space-y-4">
            <button
              className="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded-lg"
              onClick={handleCreateAccount}
            >
              Create Account
            </button>
          </div>
          <p className="mt-6 text-gray-500">
            Already have an account?{" "}
            <Link to="/login" className="text-blue-500 hover:underline">
              Log In
            </Link>
          </p>
        </div>
      </div>
    </>
  );
}

export default JoinAsClintOrFreelancer;
