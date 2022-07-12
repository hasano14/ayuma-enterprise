import React from 'react'

const CardHalfLayout = ({children, position, style}) => {
  return (
    <div className={`flex flex-col w-full md:w-1/2 bg-white border rounded-md shadow-lg px-2 py-2 my-5 ${style}`}>{children}</div>
  )
}

export default CardHalfLayout