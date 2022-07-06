import React from "react";
import Sidebar from "../sidebar/Body";

const Body = () => {
  const companyData = [
    {
      InvoiceNo: 1,
      Date: "05/07/2022",
      Company: "Choice Daily",
      Status: "Pending",
    },
    {
      InvoiceNo: 2,
      Date: "06/07/2022",
      Company: "Emart",
      Status: "Paid",
    },
    {
      InvoiceNo: 5,
      Date: "12/05/2022",
      Company: "Choice Daily",
      Status: "Paid",
    },
  ];
  const sortedCompanyData = [...companyData].sort((a, b) =>
    a.Company < b.Company ? -1 : 1
  );
  return (
    <>
      <Sidebar />
      <div className="container m-auto">
        <h1 className="text-center text-2xl font-medium my-2">Invoices</h1>
        <table className="mx-auto table-auto min-w-full">
          <thead className="border-b-2">
            <tr className="">
              <th className="font-normal text-left px-2">Company</th>
              <th className="font-normal text-right px-2">Invoice No.</th>
              <th className="font-normal text-right px-2">Date</th>
              <th className="font-normal text-left px-2">Status</th>
              <th className="font-normal text-center px-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {sortedCompanyData.map((data) => (
              <tr
                className={`${
                  data.Status === "Pending" ? "text-red-900 font-bold" : null
                }`}
              >
                <td className="text-left px-2">{data.Company}</td>
                <td className="text-right px-2">{data.InvoiceNo}</td>
                <td className="text-right px-2">{data.Date}</td>
                <td className="text-left px-2">{data.Status}</td>
                <td className="text-center px-2">
                  <button className="rounded-md text-black font-normal border border-gray-300 hover:border-gray-900 align-center px-2 py-1 my-1">
                    Update
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Body;
