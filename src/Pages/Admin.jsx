import React from 'react'
import fan from '../Assets/Icons/fan.svg'
import { useState } from 'react'
import './Admin.css'

const Admin = () => {
  const [on,setOn]=useState(true)
  return (
    <div className='Admin'>
         <img className={on?'fan1':'fan2'} src={fan} alt="fan" />
          <button onClick={()=>{setOn(!on)}}>{on?"on":"off"}</button>
    </div>
  )
}

export default Admin