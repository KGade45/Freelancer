import React from "react";

function Footer() {
  return (
    <footer className="bg-gray-800">
      <div className="py-10 px-5 flex justify-center border-b border-gray-900">
        <h2 className="text-white text-lg font-medium">Follow us:</h2>
        <div className="ml-4 flex space-x-4">
          <a href="//linkedin.com/in/kaustubh-gade-04353421a/" className="text-white">
            <i className="fab fa-linkedin"></i>
          </a>
          <a href="#" className="text-white">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="#" className="text-white">
            <i className="fab fa-youtube"></i>
          </a>
          <a href="#" className="text-white">
            <i className="fab fa-facebook"></i>
          </a>
          <a href="#" className="text-white">
            <i className="fab fa-instagram"></i>
          </a>
        </div>
      </div>
      <div className="py-4 px-5 flex justify-center items-center">
        <p className="text-white text-sm">
        © 2023 FlexiHire Inc. All rights reserved
        </p>
      </div>
    </footer>
  );
}

export default Footer;
