import React from 'react'

const Body = () => {
  const [isOpen, setIsOpen] = React.useState(true)

  return (
    <>
      {
        isOpen ? (
          <button class="flex text-4xl text-white font-semibold items-center justify-center cursor-pointer fixed left-10 z-50 top-3" onClick={() => setIsOpen(!isOpen)}> x </button>
        ) : (
          <svg
            onClick={() => setIsOpen(!isOpen)}
            className="fixed z-30 flex items-center cursor-pointer left-10 top-6"
            fill="#2563EB"
            viewBox="0 0 100 80"
            width="30"
            height="30"
          >
            <rect width="70" height="10"></rect>
            <rect y="30" width="70" height="10"></rect>
            <rect y="60" width="70" height="10"></rect>
          </svg>
        )
      }
      <div className={`top-0 left-0 w-[20vw] bg-slate-900 m-auto text-center text-white fixed h-full duration-300 ease-in-out ${isOpen ? '-translate-x-0' : '-translate-x-full'} z-40`}>
        <h2 class="mt-20 text-4xl font-semibold text-white">Sidebar</h2>
      </div>
    </>
  )
}

export default Body