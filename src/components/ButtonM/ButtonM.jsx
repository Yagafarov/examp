import React, { useState } from 'react'
import './ButtonM.css'
const ButtonM = ({children}) => {


  return (
    <button className='btn' ><span>{children}</span></button>
  )
}

export default ButtonM