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
    <div className="rounded-md border border-gray-700 px-4 py-4 mt-4">
      <h4 className="font-semibold">README.md</h4>
      <div>
        <ReactMarkdown className="prose prose  prose-sm prose-invert prose-headings:underline prose-a:text-blue-600 ">
          {text}
        </ReactMarkdown>
      </div>
    </div>
  );
};

export default Readme;
