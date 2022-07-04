import React, { useState } from "react";
import Sidebar from "../sidebar/Body";

const Body = () => {
  const [sidebarClicked, setSidebarClicked] = useState(false);

  return (
    <>
    {
      sidebarClicked ? (
        <Sidebar />
      ) : null
    }
      <div className="container m-auto">
        <h1 className="text-center">Body</h1>
        <div className=" grid grid-cols-2">
          <div className="border ">
            <h2 className="text-center">Grid</h2>
          </div>
          <div>
            <h2 className="text-center">Grid</h2>
          </div>
        </div>
      </div>
    </>
  );
};

export default Body;
