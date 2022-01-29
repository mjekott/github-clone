import React from "react";
import Header from "./components/Header";
import Stats from "./components/Stats";
import Tabs from "./components/Tabs";

function App() {
  return (
    <div className="text-gray-900 text-sm antialiased">
      <Header />
      <Stats />
      <Tabs />
    </div>
  );
}

export default App;
