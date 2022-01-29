import React from "react";

const Footer = () => {
  return (
    <div className=" hidden lg:flex container mx-auto px-4 items-center justify-between text-xs border-t border-gray-700 mt-5 ">
      <ul className="flex items-center space-x-10 py-8">
        <li className="flex items-center mr-6 text-gray-500">
          <svg className="h-6 w-6 mr-2 fill-current" viewBox="0 0 16 16">
            <path
              fill-rule="evenodd"
              d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"
            ></path>
          </svg>
          &copy; 2021 Github, Inc.
        </li>
        <li>
          <a href="/" className="text-blue-500 hover:underline">
            Terms
          </a>
        </li>
        <li>
          <a href="/" className="text-blue-500 hover:underline">
            Privacy
          </a>
        </li>
        <li>
          <a href="/" className="text-blue-500 hover:underline">
            Security
          </a>
        </li>
        <li>
          <a href="/" className="text-blue-500 hover:underline">
            Status
          </a>
        </li>
        <li>
          <a href="/" className="text-blue-500 hover:underline">
            Docs
          </a>
        </li>
        <li>
          <a href="/" className="text-blue-500 hover:underline">
            Contact Github
          </a>
        </li>
        <li>
          <a href="/" className="text-blue-500 hover:underline">
            Pricing
          </a>
        </li>
        <li>
          <a href="/" className="text-blue-500 hover:underline">
            API
          </a>
        </li>
        <li>
          <a href="/" className="text-blue-500 hover:underline">
            Traning
          </a>
        </li>
        <li>
          <a href="/" className="text-blue-500 hover:underline">
            Blog
          </a>
        </li>
        <li>
          <a href="/" className="text-blue-500 hover:underline">
            About
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Footer;
