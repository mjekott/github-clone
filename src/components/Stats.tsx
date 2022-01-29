import React from "react";

const Stats = () => {
  return (
    <div className=" px-6 py-4 flex items-center justify-between">
      <div className="flex">
        <svg
          aria-hidden="true"
          viewBox="0 0 16 16"
          className="w-4 fill-current text-gray-600"
        >
          <path d="M2 2.5A2.5 2.5 0 014.5 0h8.75a.75.75 0 01.75.75v12.5a.75.75 0 01-.75.75h-2.5a.75.75 0 110-1.5h1.75v-2h-8a1 1 0 00-.714 1.7.75.75 0 01-1.072 1.05A2.495 2.495 0 012 11.5v-9zm10.5-1V9h-8c-.356 0-.694.074-1 .208V2.5a1 1 0 011-1h8zM5 12.25v3.25a.25.25 0 00.4.2l1.45-1.087a.25.25 0 01.3 0L8.6 15.7a.25.25 0 00.4-.2v-3.25a.25.25 0 00-.25-.25h-3.5a.25.25 0 00-.25.25z"></path>
        </svg>
        <div className="flex items-center text-xl ml-2 space-x-1">
          <a href="/" className="text-blue-400 hover:underline">
            mjekott
          </a>
          <span className="text-gray-600">/</span>
          <a href="/" className="text-blue-400 hover:underline font-semibold">
            github-clone
          </a>
          <span className="border border-gray-700 px-2  text-gray-600 text-xs rounded-lg flex items-center">
            Public
          </span>
        </div>
      </div>
      <div className="flex space-x-2 text-gray-300 ">
        <div className="border border-gray-400 bg-gray-700 rounded  px-3 py-1 flex items-center  cursor-pointer">
          <svg
            className="h3 w-4 fill-current mr-1"
            height="16"
            viewBox="0 0 16 16"
          >
            <path d="M4.456.734a1.75 1.75 0 012.826.504l.613 1.327a3.081 3.081 0 002.084 1.707l2.454.584c1.332.317 1.8 1.972.832 2.94L11.06 10l3.72 3.72a.75.75 0 11-1.061 1.06L10 11.06l-2.204 2.205c-.968.968-2.623.5-2.94-.832l-.584-2.454a3.081 3.081 0 00-1.707-2.084l-1.327-.613a1.75 1.75 0 01-.504-2.826L4.456.734zM5.92 1.866a.25.25 0 00-.404-.072L1.794 5.516a.25.25 0 00.072.404l1.328.613A4.582 4.582 0 015.73 9.63l.584 2.454a.25.25 0 00.42.12l5.47-5.47a.25.25 0 00-.12-.42L9.63 5.73a4.581 4.581 0 01-3.098-2.537L5.92 1.866z"></path>
          </svg>
          <span>Pin</span>
        </div>
        <div className="border border-gray-400 bg-gray-700 rounded  px-3 py-1  flex items-center space-x-1  cursor-pointer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
            />
          </svg>
          <span>Unwatch</span>
          <span className="bg-gray-600 w-4 h-4 flex items-center justify-center rounded-full text-xs">
            1
          </span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-3 w-3 ml-1"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </div>
        <div className="border text-gray-400 border-gray-400 bg-gray-700 rounded  px-3 py-1  flex items-center space-x-2 cursor-pointer">
          <svg
            aria-hidden="true"
            className="h-4 w-4 fill-current"
            viewBox="0 0 16 16"
          >
            <path d="M5 3.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm0 2.122a2.25 2.25 0 10-1.5 0v.878A2.25 2.25 0 005.75 8.5h1.5v2.128a2.251 2.251 0 101.5 0V8.5h1.5a2.25 2.25 0 002.25-2.25v-.878a2.25 2.25 0 10-1.5 0v.878a.75.75 0 01-.75.75h-4.5A.75.75 0 015 6.25v-.878zm3.75 7.378a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm3-8.75a.75.75 0 100-1.5.75.75 0 000 1.5z"></path>
          </svg>
          <span>Fork</span>
          <span className="bg-gray-600 w-4 h-4 flex items-center justify-center rounded-full text-xs">
            0
          </span>
        </div>
        <div className="border text-gray-400 border-gray-400 bg-gray-700 rounded flex items-center cursor-pointer ">
          <div className="flex px-3 items-center space-x-2  py-1 ">
            <svg
              className="h-4 w-4 fill-current mr-1"
              viewBox="0 0 16 16"
              version="1.1"
            >
              <path d="M8 .25a.75.75 0 01.673.418l1.882 3.815 4.21.612a.75.75 0 01.416 1.279l-3.046 2.97.719 4.192a.75.75 0 01-1.088.791L8 12.347l-3.766 1.98a.75.75 0 01-1.088-.79l.72-4.194L.818 6.374a.75.75 0 01.416-1.28l4.21-.611L7.327.668A.75.75 0 018 .25zm0 2.445L6.615 5.5a.75.75 0 01-.564.41l-3.097.45 2.24 2.184a.75.75 0 01.216.664l-.528 3.084 2.769-1.456a.75.75 0 01.698 0l2.77 1.456-.53-3.084a.75.75 0 01.216-.664l2.24-2.183-3.096-.45a.75.75 0 01-.564-.41L8 2.694v.001z"></path>
            </svg>
            <span>Star</span>
            <span className="bg-gray-600 w-4 h-4 flex items-center justify-center rounded-full text-xs">
              0
            </span>
          </div>
          <div className="h-full w-6  flex items-center border border-l-1 border-r-0 border-t-0 border-b-0 border-gray-400">
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stats;
