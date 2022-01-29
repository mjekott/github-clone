import React from "react";
import Explorer from "./components/Explorer";
import Header from "./components/Header";
import Stats from "./components/Stats";
import Tabs from "./components/Tabs";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="text-gray-900 bg-githubdark text-sm antialiased  min-h-screen overflow-hidden">
      <Header />
      <Stats />
      <Tabs />
      <Explorer />
      <Footer />
    </div>
  );
}

export default App;
