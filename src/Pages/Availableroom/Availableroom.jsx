import React from 'react'
import './availableroom.css'
import Buttonstyle from '../../Components/Buttontype/Buttonstyle'
import { Link } from 'react-router-dom'
import { useState } from 'react'
const Availableroom = () => {
  const[display,setDisplay] = useState(false)
  const changeDisplay=()=>{
    setDisplay(true);
    console.log(display);
  }
  return (
    <div className="con">
     <div className="newbook"><h1><b>New Booking</b></h1></div>
           <div className="cont1">
      <form >
        <div className='input-container'>
          <div className='i'>Guest First Name</div>
          <input className='i' type="text" name=" "  /></div>
        <div className='input-container'> 
          <div className='i'>Guest Last Name</div>
          <input className='i' type="text" name=" "  /></div>
        <div className='input-container'>
          <div className='i'>Checked in date</div>
          <input className='i' type="date" name=" "  /></div>
        <div className='input-container'> 
          <div className='i'>Checked out date</div>
          <input className='i' type="date" name=" " /></div>
        <div className='input-container'>  
          <div className='i'>Number of Adults</div>
          <input className='i' type="number" name=" "  /></div>
        <div className='input-container'>
          <div className='i'>Number of Children</div>
          <input className='i' type="number" name=" "  /></div>
          <div className="rom-num">Room<br />202 at 48$ per night</div>


          </form>
          <div className="outbutton">
            
          <div className='divbutton'><Buttonstyle onClick={changeDisplay} type="primary" label="Get Available room"/></div>
          <div className='broom' > <Buttonstyle type="secondary" label="Book Room"/></div>
          <div className='back'><Link to={'/'} className='linkback'>Back</Link></div>
          </div>
          
          {display?<div className="three-button">
            <Buttonstyle type="secondary" label="Check-in"/>
            <Buttonstyle type="secondary" label="Check-out"/>
            <Buttonstyle onClick={()=>setDisplay(false)} type="secondary" label="cancel"/>
          </div>:""}
      </div>

    </div>
  )
}

export default Availableroom