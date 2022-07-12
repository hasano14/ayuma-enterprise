import React from 'react'

const CardHeader = ({children}) => {
  return (
    <div className="text-center text-2xl font-medium mt-3 mb-5">
    {children}
    </div>
  )
}

export default CardHeader