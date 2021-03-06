import React, { useState } from "react";

const Header = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <nav className="bg-githublight hidden lg:flex text-white px-6 py-3 items-center justify-between">
        <div className="flex items-center space-x-4 ">
          <a href="/" className="text-white hover:text-gray-400">
            <svg className="w-8 fill-current" viewBox="0 0 16 16" version="1.1">
              <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path>
            </svg>
          </a>
          <div className="relative">
            <input
              type="search"
              className="rounded bg-githubdark placeholder-gray-100 w-72 px-3 py-1 focus:w-96 focus:outline-none transition-all duration-200 ease-in"
              placeholder="Search or jump to..."
            />
            <div className="absolute top-0 right-0 flex items-center h-full">
              <span className="border border-gray-600 rounded text-xs text-gray-400 px-2 mr-2">
                /
              </span>
            </div>
          </div>
          <ul className="flex items-center font-semibold  space-x-4 cursor-pointer">
            <li className="hover:text-gray-400">Pull Requests</li>
            <li className="hover:text-gray-400">Issues</li>
            <li className="hover:text-gray-400">Marketplace</li>
            <li className="hover:text-gray-400">Explore</li>
          </ul>
        </div>
        <div className="flex items-center space-x-4 text-white">
          <a href="/" className="relative hover:text-gray-400">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 "
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
              />
            </svg>
            <span className="bg-blue-600 rounded-full w-2 h-2 absolute top-0 right-1 "></span>
          </a>
          <a
            href="/"
            className="relative hover:text-gray-400 flex items-center"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 4v16m8-8H4"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-3 w-3 ml-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </a>
          <a href="/" className="relative flex items-center">
            <img
              src="https://avatars.githubusercontent.com/u/16419577?s=40&amp;v=4"
              alt="@mjekott"
              className="rounded-full h-5 w-5"
            ></img>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-3 w-3 ml-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </a>
        </div>
      </nav>
      <nav className="bg-githublight  flex lg:hidden flex-col text-white px-6 py-3 ">
        <div className="flex flex-row justify-between items-center">
          <button
            aria-label="Toggle navigation"
            aria-expanded="false"
            type="button"
            onClick={() => setOpen((prev) => !prev)}
          >
            <svg
              className="h-6 w-6 fill-current"
              viewBox="0 0 16 16"
              version="1.1"
            >
              <path
                fill-rule="evenodd"
                d="M1 2.75A.75.75 0 011.75 2h12.5a.75.75 0 110 1.5H1.75A.75.75 0 011 2.75zm0 5A.75.75 0 011.75 7h12.5a.75.75 0 110 1.5H1.75A.75.75 0 011 7.75zM1.75 12a.75.75 0 100 1.5h12.5a.75.75 0 100-1.5H1.75z"
              ></path>
            </svg>
          </button>
          <svg className="w-8 fill-current" viewBox="0 0 16 16" version="1.1">
            <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path>
          </svg>
          <a href="/" className="relative hover:text-gray-400">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 "
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
              />
            </svg>
            <span className="bg-blue-600 rounded-full w-2 h-2 absolute top-0 right-1 "></span>
          </a>
        </div>
        <div
          className={`${
            open ? "flex" : "hidden"
          } flex-col py-2 mt-3  transition duration-200 ease-out`}
        >
          <div className="relative ">
            <input
              type="search"
              className="rounded bg-githubdark placeholder-gray-100 w-full px-3 py-1 focus:w-96 focus:outline-none transition-all duration-200 ease-in"
              placeholder="Search or jump to..."
            />
            <div className="absolute top-0 right-0 flex items-center h-full">
              <span className="border border-gray-600 rounded text-xs text-gray-400 px-2 mr-2">
                /
              </span>
            </div>
          </div>
          <ul className="  divide-y divide-gray-700 border-t-2 border-gray-700 mt-4 text-lg">
            <li className="py-2">
              <a href="/">Dashboard</a>
            </li>
            <li className="py-2">
              <a href="/">Pull requests</a>
            </li>
            <li className="py-2">
              <a href="/">Issues</a>
            </li>
            <li className="py-2">
              <a href="/">Marketplace</a>
            </li>
            <li className="py-2">
              <a href="/">Explore</a>
            </li>
            <li className="py-2">
              <a href="/">Codespaces</a>
            </li>
            <li className="py-2">
              <a href="/">Sponsors</a>
            </li>
            <li className="py-2">
              <a href="/">Settings</a>
            </li>
            <li className="py-2">
              <a href="/" className="flex">
                <img
                  src="https://avatars.githubusercontent.com/u/16419577?s=40&amp;v=4"
                  alt="@mjekott"
                  className="rounded-full h-5 w-5 mr-2"
                ></img>
                <span>mjekott</span>
              </a>
            </li>
            <li className="py-2">
              <a href="https://github.com/" className="flex">
                <svg className="h-4 -4 mr-2 fill-current" viewBox="0 0 16 16">
                  <path
                    fill-rule="evenodd"
                    d="M2 2.75C2 1.784 2.784 1 3.75 1h2.5a.75.75 0 010 1.5h-2.5a.25.25 0 00-.25.25v10.5c0 .138.112.25.25.25h2.5a.75.75 0 010 1.5h-2.5A1.75 1.75 0 012 13.25V2.75zm10.44 4.5H6.75a.75.75 0 000 1.5h5.69l-1.97 1.97a.75.75 0 101.06 1.06l3.25-3.25a.75.75 0 000-1.06l-3.25-3.25a.75.75 0 10-1.06 1.06l1.97 1.97z"
                  ></path>
                </svg>
                <span>Sign out</span>
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Header;
