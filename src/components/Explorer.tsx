import React from "react";
import ExplorerFiles from "./ExplorerFiles";
import Readme from "./Readme";
import Sidebar from "./Sidebar";

const Explorer = () => {
  return (
    <div className="container mx-auto  flex px-4 mt-8 text-gray-300 font-light ">
      <div className="w-3/4 mr-8">
        <ExplorerFiles />
        <Readme />
      </div>
      <div className="w-1/4">
        <Sidebar />
      </div>
    </div>
  );
};

export default Explorer;
