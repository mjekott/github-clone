import React, { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import source from "./markdown.md";

const Readme = () => {
  const [text, settext] = useState("");
  useEffect(() => {
    fetch(source)
      .then((res) => res.text())
      .then((value) => settext(value))
      .catch((err) => console.error(err));
  }, []);
  return (
    <div className="rounded-md border border-gray-700 py-1 my-4">
      <div className="flex items-center justify-between text-gray-500 mb-4 border-b px-4  border-gray-700">
        <div className="flex items-center py-3">
          <div className="hover:bg-gray-600 group flex items-center justify-center p-2 rounded-md mr-3 cursor-pointer">
            <svg
              className="fill-current  w-4 h-4 group-hover:text-gray-500"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M2 4a1 1 0 100-2 1 1 0 000 2zm3.75-1.5a.75.75 0 000 1.5h8.5a.75.75 0 000-1.5h-8.5zm0 5a.75.75 0 000 1.5h8.5a.75.75 0 000-1.5h-8.5zm0 5a.75.75 0 000 1.5h8.5a.75.75 0 000-1.5h-8.5zM3 8a1 1 0 11-2 0 1 1 0 012 0zm-1 6a1 1 0 100-2 1 1 0 000 2z"
              ></path>
            </svg>
          </div>

          <span className="text-md font-semibold  text-gray-500">
            README.md
          </span>
        </div>
        <div>
          <a href="/">
            <svg className="w-4 h-4 fill-current" viewBox="0 0 16 16">
              <path
                fill-rule="evenodd"
                d="M11.013 1.427a1.75 1.75 0 012.474 0l1.086 1.086a1.75 1.75 0 010 2.474l-8.61 8.61c-.21.21-.47.364-.756.445l-3.251.93a.75.75 0 01-.927-.928l.929-3.25a1.75 1.75 0 01.445-.758l8.61-8.61zm1.414 1.06a.25.25 0 00-.354 0L10.811 3.75l1.439 1.44 1.263-1.263a.25.25 0 000-.354l-1.086-1.086zM11.189 6.25L9.75 4.81l-6.286 6.287a.25.25 0 00-.064.108l-.558 1.953 1.953-.558a.249.249 0 00.108-.064l6.286-6.286z"
              ></path>
            </svg>
          </a>
        </div>
      </div>
      <div className="px-4">
        <ReactMarkdown className="prose prose  prose-sm prose-invert prose-headings:underline prose-a:text-blue-600 ">
          {text}
        </ReactMarkdown>
      </div>
    </div>
  );
};

export default Readme;
