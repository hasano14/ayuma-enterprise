import React from 'react'

const CardHalfLayoutContent = ({children, style}) => {
  return (
    <div className={`mx-auto ${style}`}>{children}</div>
  )
}

export default CardHalfLayoutContent