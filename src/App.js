import React from "react";
import Homepage from "./components/Home.js";
import Sidebar from "./components/sidebar/Sidebar";

const App = () => {
  return (
    <div class="flex flex-row bg-offwhite min-h-screen transition-all">
      <Sidebar />
      <Homepage />
    </div>
  );
};

export default App;
