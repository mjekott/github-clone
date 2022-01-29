import React from "react";
import Header from "./components/Header";
import Stats from "./components/Stats";
import Tabs from "./components/Tabs";

function App() {
  return (
    <div className="text-gray-900 bg-gray-800 text-sm antialiased min-h-screen">
      <Header />
      <Stats />
      <Tabs />
    </div>
  );
}

export default App;
