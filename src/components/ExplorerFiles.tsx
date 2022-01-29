import React from "react";

const data = [
  {
    name: "vscode",
    file: false,
    commit: "Project setup",
    date: "5 months ago",
  },
  {
    name: "dist",
    file: false,
    commit: "Project setup",
    date: "5 months ago",
  },
  {
    name: "package.json",
    file: true,
    commit: "Project setup",
    date: "5 months ago",
  },
  {
    name: "src",
    file: false,
    commit: "Project setup",
    date: "5 months ago",
  },
  {
    name: ".gitignore",
    file: true,
    commit: "Project setup",
    date: "5 months ago",
  },
  {
    name: ".eslintrc.js",
    file: true,
    commit: "Project setup",
    date: "5 months ago",
  },
  {
    name: "test",
    file: false,
    commit: "Project setup",
    date: "5 months ago",
  },
  {
    name: ".tsconfig",
    file: true,
    commit: "Project setup",
    date: "5 months ago",
  },
];

const ExplorerFiles = () => {
  const folders = data.filter((file) => file.file === false);
  const files = data.filter((file) => file.file === true);
  return (
    <>
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-2 ">
          <button className="flex items-center px-4 py-1 space-x-2 bg-githublight border border-githublight hover:bg-gray-700 transition ease-out duration-150 rounded">
            <svg className="fill-current h-4 w-4" viewBox="0 0 16 16">
              <path
                fill-rule="evenodd"
                d="M11.75 2.5a.75.75 0 100 1.5.75.75 0 000-1.5zm-2.25.75a2.25 2.25 0 113 2.122V6A2.5 2.5 0 0110 8.5H6a1 1 0 00-1 1v1.128a2.251 2.251 0 11-1.5 0V5.372a2.25 2.25 0 111.5 0v1.836A2.492 2.492 0 016 7h4a1 1 0 001-1v-.628A2.25 2.25 0 019.5 3.25zM4.25 12a.75.75 0 100 1.5.75.75 0 000-1.5zM3.5 3.25a.75.75 0 111.5 0 .75.75 0 01-1.5 0z"
              ></path>
            </svg>
            <span>master</span>
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
          </button>
          <a
            href="/"
            className="hidden lg:flex items-center px-4 py-1 group transition ease-out duration-150 rounded"
          >
            <svg
              className="fill-current group-hover:text-blue-400 h-4 w-4 mr-1.5"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M11.75 2.5a.75.75 0 100 1.5.75.75 0 000-1.5zm-2.25.75a2.25 2.25 0 113 2.122V6A2.5 2.5 0 0110 8.5H6a1 1 0 00-1 1v1.128a2.251 2.251 0 11-1.5 0V5.372a2.25 2.25 0 111.5 0v1.836A2.492 2.492 0 016 7h4a1 1 0 001-1v-.628A2.25 2.25 0 019.5 3.25zM4.25 12a.75.75 0 100 1.5.75.75 0 000-1.5zM3.5 3.25a.75.75 0 111.5 0 .75.75 0 01-1.5 0z"
              ></path>
            </svg>
            <span className="mr-1 font-bold text-md group-hover:text-blue-400">
              1
            </span>
            <span>branch</span>
          </a>
          <a
            href="/"
            className="hidden lg:flex items-center px-4 py-1 group transition ease-out duration-150 rounded"
          >
            <svg
              className="fill-current group-hover:text-blue-400 h-4 w-4 mr-1.5"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M2.5 7.775V2.75a.25.25 0 01.25-.25h5.025a.25.25 0 01.177.073l6.25 6.25a.25.25 0 010 .354l-5.025 5.025a.25.25 0 01-.354 0l-6.25-6.25a.25.25 0 01-.073-.177zm-1.5 0V2.75C1 1.784 1.784 1 2.75 1h5.025c.464 0 .91.184 1.238.513l6.25 6.25a1.75 1.75 0 010 2.474l-5.026 5.026a1.75 1.75 0 01-2.474 0l-6.25-6.25A1.75 1.75 0 011 7.775zM6 5a1 1 0 100 2 1 1 0 000-2z"
              ></path>
            </svg>
            <span className="mr-1 font-bold text-md group-hover:text-blue-400">
              0
            </span>
            <span>Tags</span>
          </a>
        </div>
        <div className=" hidden lg:flex space-x-2">
          <button className="flex items-center px-4 py-1 space-x-2 bg-githublight border border-githublight hover:bg-gray-700 transition ease-out duration-150 rounded">
            <span className="text-md">Go to file</span>
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
          </button>
          <button className="flex items-center px-4 py-1 space-x-2 bg-githublight border border-githublight hover:bg-gray-700 transition ease-out duration-150 rounded">
            <span className="text-md">Add file</span>
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
          </button>
          <button className="flex items-center px-4 py-1 space-x-2 bg-green-700 border border-green-700 hover:bg-green-800 transition ease-out duration-150 rounded">
            <span className="text-md">Code</span>
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
          </button>
        </div>
        <div className="flex lg:hidden">
          <button className="flex items-center justify-center w-16 py-1 bg-githublight border border-githublight hover:bg-gray-700 transition ease-out duration-150 rounded">
            <span className="text-md -translate-y-1">...</span>
          </button>
        </div>
      </div>
      <div className="flex flex-col mt-2 border border-gray-700 border-t-0 border-b-0 rounded-md rounded-b-none  ">
        <div className="flex items-center justify-between bg-githublight rounded-md rounded-b-none  px-4 py-2">
          <div className="flex items-center space-x-2">
            <img
              src="https://avatars.githubusercontent.com/u/16419577?s=40&amp;v=4"
              alt="@mjekott"
              height="20"
              width="20"
              className="rounded-full h-5 w-5 "
              data-view-component="true"
            ></img>
            <a href="/" className="font-bold text-gray-300 hover:underline">
              mjekott
            </a>
            <a
              href="/"
              className="text-gray-400 hidden lg:flex text-xs hover:underline "
            >
              Fixing navbar
            </a>
          </div>
          <div className="flex space-x-2 items-center text-gray-500">
            <a
              href="/"
              className="hover:text-blue-400 hidden lg:flex  hover:underline"
            >
              ddefca1
            </a>
            <a
              href="/"
              className="hover:text-blue-400 hidden lg:flex  hover:underline"
            >
              on Jan 28,2021
            </a>
            <a
              href="/"
              className="items-center hidden lg:flex  group font-mono "
            >
              <svg
                className="fill-current mr-1 text-gray-300 group-hover:text-blue-400"
                height="16"
                viewBox="0 0 16 16"
              >
                <path
                  fill-rule="evenodd"
                  d="M1.643 3.143L.427 1.927A.25.25 0 000 2.104V5.75c0 .138.112.25.25.25h3.646a.25.25 0 00.177-.427L2.715 4.215a6.5 6.5 0 11-1.18 4.458.75.75 0 10-1.493.154 8.001 8.001 0 101.6-5.684zM7.75 4a.75.75 0 01.75.75v2.992l2.028.812a.75.75 0 01-.557 1.392l-2.5-1A.75.75 0 017 8.25v-3.5A.75.75 0 017.75 4z"
                ></path>
              </svg>
              <span className="mr-1 text-gray-300 group-hover:text-blue-400">
                46
              </span>
              <span>commits</span>
            </a>
            <a
              href="/"
              className=" items-center flex lh:hidden   group font-mono "
            >
              <span className="mr-1 text-gray-300 group-hover:text-blue-400">
                1 day ago
              </span>
              <svg
                className="fill-current text-gray-300 group-hover:text-blue-400"
                height="16"
                viewBox="0 0 16 16"
              >
                <path
                  fill-rule="evenodd"
                  d="M1.643 3.143L.427 1.927A.25.25 0 000 2.104V5.75c0 .138.112.25.25.25h3.646a.25.25 0 00.177-.427L2.715 4.215a6.5 6.5 0 11-1.18 4.458.75.75 0 10-1.493.154 8.001 8.001 0 101.6-5.684zM7.75 4a.75.75 0 01.75.75v2.992l2.028.812a.75.75 0 01-.557 1.392l-2.5-1A.75.75 0 017 8.25v-3.5A.75.75 0 017.75 4z"
                ></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
      <div className="rounded-md rounded-t-none border border-gray-700 border-t-none text-gray-400 divide-y divide-gray-700">
        {folders.map((file) => (
          <div className="flex justify-between items-center px-4 py-2 hover:bg-githublight">
            <div className="flex w-4/12  ">
              {file.file ? (
                <svg className="fill-current h-4 w-4 mr-4">
                  <path
                    fill-rule="evenodd"
                    d="M3.75 1.5a.25.25 0 00-.25.25v11.5c0 .138.112.25.25.25h8.5a.25.25 0 00.25-.25V6H9.75A1.75 1.75 0 018 4.25V1.5H3.75zm5.75.56v2.19c0 .138.112.25.25.25h2.19L9.5 2.06zM2 1.75C2 .784 2.784 0 3.75 0h5.086c.464 0 .909.184 1.237.513l3.414 3.414c.329.328.513.773.513 1.237v8.086A1.75 1.75 0 0112.25 15h-8.5A1.75 1.75 0 012 13.25V1.75z"
                  ></path>
                </svg>
              ) : (
                <svg className="fill-current h-4 w-4 mr-4">
                  <path
                    fill-rule="evenodd"
                    d="M1.75 1A1.75 1.75 0 000 2.75v10.5C0 14.216.784 15 1.75 15h12.5A1.75 1.75 0 0016 13.25v-8.5A1.75 1.75 0 0014.25 3h-6.5a.25.25 0 01-.2-.1l-.9-1.2c-.33-.44-.85-.7-1.4-.7h-3.5z"
                  ></path>
                </svg>
              )}
              <a href="/" className="hover:underline hover:text-blue-400">
                {file.name}
              </a>
            </div>
            <a
              href="/"
              className="hidden lg:flex w-6/12 truncate hover:underline hover:text-blue-400"
            >
              {file.commit}
            </a>
            <div className="w-4/12 lg:w-2/12 text-right"> {file.date}</div>
          </div>
        ))}
        {files.map((file) => (
          <div className="flex justify-between items-center px-4 py-2 hover:bg-githublight">
            <div className="flex w-4/12  ">
              {file.file ? (
                <svg className="fill-current h-4 w-4 mr-4">
                  <path
                    fill-rule="evenodd"
                    d="M3.75 1.5a.25.25 0 00-.25.25v11.5c0 .138.112.25.25.25h8.5a.25.25 0 00.25-.25V6H9.75A1.75 1.75 0 018 4.25V1.5H3.75zm5.75.56v2.19c0 .138.112.25.25.25h2.19L9.5 2.06zM2 1.75C2 .784 2.784 0 3.75 0h5.086c.464 0 .909.184 1.237.513l3.414 3.414c.329.328.513.773.513 1.237v8.086A1.75 1.75 0 0112.25 15h-8.5A1.75 1.75 0 012 13.25V1.75z"
                  ></path>
                </svg>
              ) : (
                <svg className="fill-current h-4 w-4 mr-4">
                  <path
                    fill-rule="evenodd"
                    d="M1.75 1A1.75 1.75 0 000 2.75v10.5C0 14.216.784 15 1.75 15h12.5A1.75 1.75 0 0016 13.25v-8.5A1.75 1.75 0 0014.25 3h-6.5a.25.25 0 01-.2-.1l-.9-1.2c-.33-.44-.85-.7-1.4-.7h-3.5z"
                  ></path>
                </svg>
              )}
              <a href="/" className="hover:underline hover:text-blue-400">
                {file.name}
              </a>
            </div>
            <a
              href="/"
              className="hidden lg:flex w-6/12 truncate hover:underline hover:text-blue-400"
            >
              {file.commit}
            </a>
            <div className="w-4/12 lg:w-2/12 text-right"> {file.date}</div>
          </div>
        ))}
      </div>
    </>
  );
};

export default ExplorerFiles;
