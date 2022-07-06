import React, { useState } from "react";
import ReceiptLongIcon from "@mui/icons-material/ReceiptLong";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";

const Body = () => {
  const [currentRoute, setCurrentRoute] = useState("");

  return (
    <nav
      className={`fixed noselect flex flex-col top-0 left-0 max-w-fit bg-teal-900 justify-between rounded-r-3xl text-white h-screen z-40 transition-all duration-300 items-center border-black`}
    >
      <h1 className="flex text-3xl align-top">Hello</h1>
      <ul class="flex flex-col items-center align-middle">
        <li className="relative group cursor-pointer" onClick={() => setCurrentRoute("Invoice")}>
          <ReceiptLongIcon
            className="ml-3 mr-5 my-2 inline text-gray-400 hover:text-gray-800 transition-colors duration-150"
            sx={{ fontSize: 40 }}
          />
          <span className="absolute text-black w-auto ml-2 items-center min-w-max text-xl hidden pt-2 group-hover:inline transition-all ease-in-out duration-200">
            Invoice
          </span>
        </li>
        <li className="relative group cursor-pointer" onClick={() => setCurrentRoute("Billing")}>
          <AccountBalanceIcon
            className="ml-3 mr-5 my-2 inline text-gray-400 hover:text-gray-800 transition-colors duration-150"
            sx={{ fontSize: 40 }}
          />
          <span className="absolute w-auto ml-2 items-center min-w-max text-xl hidden pt-2 group-hover:inline text-black transition-all ease-in-out duration-200">
            Billing
          </span>
        </li>
      </ul>
      <div className="align-bottom"></div>
    </nav>
  );
};

export default Body;
