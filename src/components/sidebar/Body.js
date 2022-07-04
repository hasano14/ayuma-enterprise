import React from "react";

const Body = () => {
  const [showSidebar, setShowSidebar] = React.useState(true);
  const focusedElement = document.querySelector(".sideBar")
  const genericHamburgerLine = `h-1 w-6 my-1 rounded-full bg-black transition ease transform duration-300`;

  document.addEventListener("mousedown", (e) => {
    if (focusedElement.contains(e.target)) {
      return;
    }
    setShowSidebar(false);
  });
  return (
    <div className="top-0 left-0 text-text2Dark fixed h-full sideBar z-50 noselect">
      <button
        className="left-2 top-0 mt-2 md:mt-5 flex flex-col h-12 w-12 rounded justify-center items-center group"
        onClick={() => setShowSidebar(!showSidebar)}
      >
        <div className="z-50">
          <div
            className={`${genericHamburgerLine} ${
              showSidebar
                ? "rotate-45 translate-y-2 opacity-50 group-hover:opacity-100"
                : "opacity-50 group-hover:opacity-100"
            }`}
          ></div>
          <div
            className={`${genericHamburgerLine} ${
              showSidebar ? "opacity-0" : "opacity-50 group-hover:opacity-100"
            }`}
          ></div>
          <div
            className={`${genericHamburgerLine} ${
              showSidebar
                ? "-rotate-45 -translate-y-2 opacity-50 group-hover:opacity-100"
                : "opacity-50 group-hover:opacity-100"
            }`}
          ></div>
        </div>
      </button>
      <div
        className={`noselect top-0 left-0 pt-32 w-1/2 md:max-w-fit bg-text2Light pl-6 bg-teal-900 pr-12 text-white fixed h-full z-40 transition-all duration-300 ${
          showSidebar ? "translate-x-0 " : "-translate-x-full"
        }`}
      >
        Hello
      </div>
    </div>
  );
};

export default Body;
