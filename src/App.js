import React from "react";
import Homepage from "./components/invoice-table/Body.js";
import Sidebar from "./components/sidebar/Body";

const App = () => {
  return (
    <div class="flex flex-col flex-auto bg-offwhite min-h-screen">
      <Sidebar />
      <Homepage />
    </div>
  );
};

export default App;
