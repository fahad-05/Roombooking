import React from 'react'
import './buttonstyle.css'
const Buttonstyle = ({type,label,onClick}) => {
  return (

    <button onClick={onClick} className={type==="primary"?"primary":"secondary"}>{label}</button>
  
  )
} 

export default Buttonstyle