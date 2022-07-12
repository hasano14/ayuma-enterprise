import React from "react";
import Invoice from "./invoice-table/Body";
import Pending from "./pending-table/Table";
import Graphs from "./Graphs";
import Graphs2 from "./Graphs copy";

const Home = () => {
  return (
    <div className="container mx-auto my-auto flex flex-col">
      <div className="flex flex-col md:flex-row md:gap-3">
        <Graphs />
        <Graphs2 />
      </div>
      <Pending />
      <Invoice />
    </div>
  );
};

export default Home;
