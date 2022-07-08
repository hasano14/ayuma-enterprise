import React, { useState } from "react";
import ReceiptLongIcon from "@mui/icons-material/ReceiptLong";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import { Sidebar } from "flowbite-react";

const Body = () => {
  const [currentRoute, setCurrentRoute] = useState("");

  return (
    <aside className="w-64 bg-white border-r-2 border-gray-300">
      <div className="overflow-y-auto py-4 px-3 bg-gray-50 rounded">
<ul></ul>
      </div>
    </aside>
  );
};

export default Body;
