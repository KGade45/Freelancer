import React from "react";
import image1 from "../../assets/image1.png";
import { Link } from 'react-router-dom';

function UpYourWork() {
  return (
    <div className="mt-10 bg-green-500 md:flex p-20 h-fit">
      <div className="md:flex mx-auto items-center justify-center space-x-8">
        <div>
          <img
            className="rounded shadow-lg flex-shrink-0"
            src={image1}
            alt=""
          />
        </div>
        <div className="text-center md:text-left">
          <p className="text-black text-4xl font-inter font-bold mb-4">
            Up Your Work Game for Free
          </p>
          <div className="flex flex-col items-start space-y-4">
            {/** Section 1 */}
            <div className="flex items-center space-x-4">
              <svg
                
                width="35"
                height="27"
                viewBox="0 0 35 27"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  id="Vector"
                  d="M28.085 8.6597V6.10647C28.085 3.69877 28.085 2.49619 26.8445 1.7481C25.6039 1 23.6097 1 19.617 1H15.3829C11.3903 1 9.39603 1 8.15546 1.7481C6.91489 2.49619 6.91489 3.69877 6.91489 6.10647V8.6597"
                  stroke="black"
                  stroke-width="1.5"
                />
              </svg>
              <div className="text-left">
                <p className="text-black text-lg font-inter font-medium">
                  No Cost to Join
                </p>
                <p className="text-white text-xs font-inter font-semibold">
                  Register, browse professionals, explore projects, or book a consultation.
                </p>
              </div>
            </div>

            {/** Section 2 */}
            <div className="flex items-center space-x-4">
              <svg
                width="33"
                height="25"
                viewBox="0 0 33 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  id="Vector_2"
                  d="M14.46 5.82944C15.3926 5.52284 16.4378 5.36218 17.5 5.36218C18.5622 5.36218 19.6074 5.52284 20.54 5.82944L30.689 9.16651C31.691 9.49592 32.5272 9.98204 33.1099 10.5738C33.6925 11.1655 34 11.8409 34 12.5291V18.8331C34 19.5212 33.6925 20.1967 33.1099 20.7884C32.5272 21.3801 31.691 21.8663 30.689 22.1957L20.54 25.5327C19.6074 25.8393 18.5622 26 17.5 26C16.4378 26 15.3926 25.8393 14.46 25.5327L4.30889 22.1957C3.30732 21.8661 2.47147 21.3799 1.88922 20.7882C1.30696 20.1965 0.999789 19.5211 1 18.8331V12.5278C0.999789 11.8398 1.30696 11.1644 1.88922 10.5727C2.47147 9.981 3.30732 9.49481 4.30889 9.16524L14.46 5.82944Z"
                  stroke="black"
                  stroke-width="1.5"
                />
              </svg>
              <div className="text-left">
                <p className="text-black text-lg font-inter font-medium">
                  Post a Job and Hire Top Talent
                </p>
                <p className="text-white text-xs font-inter font-semibold">
                  Finding talent made easy. Post a job or let us search for you!
                </p>
              </div>
            </div>

            {/** Section 3 */}
            <div className="flex items-center space-x-4">
              <svg
                width="35"
                height="27"
                viewBox="0 0 35 27"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  id="Vector_3"
                  d="M15.6921 13.1572C16.4965 12.2865 16.8988 11.8512 17.5 11.8512C18.1012 11.8512 18.5035 12.2865 19.3079 13.1572L19.5154 13.3819C19.744 13.6295 19.8584 13.7521 20.0362 13.8351C20.2161 13.9155 20.4384 13.9461 20.883 14.0074L21.2852 14.0623C22.8476 14.2755 23.6288 14.3815 23.8151 14.7427C24.0014 15.1027 23.4679 15.4781 22.403 16.2287L22.1278 16.4228C21.8251 16.6372 21.6726 16.7432 21.6049 16.876C21.5372 17.0075 21.5604 17.1492 21.6049 17.4351L21.6472 17.6943C21.8081 18.6951 21.8886 19.1968 21.4038 19.419C20.9169 19.6424 20.1844 19.4394 18.7215 19.0334L18.3447 18.9275C17.9276 18.8126 17.7202 18.7551 17.5 18.7551C17.2798 18.7551 17.0724 18.8126 16.6553 18.9275L16.2785 19.0334C14.8156 19.4394 14.0831 19.6424 13.5962 19.419C13.1093 19.1968 13.1919 18.6951 13.3528 17.6943L13.3951 17.4338C13.4396 17.1492 13.4629 17.0075 13.3951 16.876C13.3274 16.7432 13.175 16.6372 12.8722 16.4228L12.597 16.2287C11.5321 15.4781 10.9987 15.1027 11.185 14.7427C11.3713 14.3815 12.1524 14.2755 13.7148 14.0623L14.117 14.0074C14.5616 13.9461 14.7839 13.9155 14.9638 13.8351C15.1417 13.7534 15.256 13.6295 15.4846 13.3819L15.6921 13.1572Z"
                  stroke="black"
                  stroke-width="1.5"
                />
              </svg>
              <div className="text-left">
                <p className="text-black text-lg font-inter font-medium">
                  Work with the Best—Without Breaking the Bank
                </p>
                <p className="text-white text-xs font-inter font-semibold">
                  Upwork makes it affordable to elevate your work with low transaction rates.
                </p>
              </div>
            </div>
          </div>
          <div className="mt-8">
            <Link to='/joinAsClintOrFreelancer'>
              <button className="md:flex bg-white hover:bg-gray-200 hover:text-black text-black mt-2 md:ml-0 font-bold py-2 px-8 rounded-full">
                Sign Up for Free
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UpYourWork;
