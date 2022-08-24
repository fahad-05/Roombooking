import React from 'react'
import './nbooking.css'
import { Link } from 'react-router-dom'
import Mainheader from '../../Components/Header/Mainheader'

const Newbooking = () => {
  return (
    <div className='container1'>
      <Mainheader/>
      <div className="header1"><h1>New Booking</h1>
      </div>
      <div className="main1">
        <form>
          <div className="lname a">
          <label>Guest Last Name</label>
          <div>
            <input type="text"/>
            </div>
          </div>
          <div className="fname a">
          <label>Guest First Name</label>
          
          <div>
            <input type="text"/>
          </div> 
          </div>
          <div className="checkd a">
          <label>Checked in Date</label>
          
          <div>
            <input type="date"/> 
            </div>
          </div>
          <div className="checkind a">
          <label>Checked Out Date</label>
          <div>
            <input type="date"/>
            </div>
          </div>
          <div className="numadults a">
          <label>Number Of Adults</label>
          <div>
            <input type="number"/>
            </div>
          </div>
          <div className="numchildren a">
          <label>Number Of Children</label>
          <div><input type="text"/> 
          </div>  
          </div>
        </form>
        <div className="buttonb"><Link to={'/availableroom'} className='link1'>
          <h4><b>Get Available Room</b></h4></Link></div>
      </div>
      </div>
  )
}

export default Newbooking