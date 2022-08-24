import React from 'react'
import './Bookings.css'
import Buttonstyle from '../../Components/Buttontype/Buttonstyle'
import { Link } from 'react-router-dom'
import Mainheader from '../../Components/Header/Mainheader'
import Bookingdetail from '../../Components/Bookingdetail/Bookingdetail'
const Bookings = () => {
  return (
    <div className="bookingscontainer">
      <Mainheader/>
        <div className="heading8">
         <div className="booking8">Bookings</div>
         <div className='outbooking8'><Link to={'/newbooking'} className='link'>New Booking</Link></div></div>
         <div className="headbook8">
            <div>
            <input className='bookings-input8' type="text"  name=" " placeholder='(Type Guest Name)'/>
            </div>
            <div>
            <select>
            <option>-Any Status-</option>
            <option>VIP</option>
            <option>VVIP</option>
            </select>
            </div>
            <div className='bottonsearch8'>
                <Buttonstyle type='primary' label="Search"  />
            </div>   
           
          
         </div>
        <div className="booking-details8">
        <div className="book-heading8">Guest First Name</div>
        <div className="book-heading8">Guest Last Name</div>
        <div className="book-heading8">Room Number</div>
        <div className="book-heading8">Check-in date</div>
        <div className="book-heading8">Check-out date</div>
        <div className="book-heading8">Status</div>
        </div>
        <Bookingdetail txt='Gonvas' txt1='Sofia' txt2='101' txt3='23/jan/2020' txt4='25/jan/2020' txt5='Checked-in' />
        <Bookingdetail txt='Gonvi' txt1='ervin' txt2='102' txt3='29/jan/2020' txt4='6/feb/2020' txt5='Checked-out' />
        <Bookingdetail txt='estrada' txt1='ernandez' txt2='103' txt3='23/jan/2020' txt4='25/jan/2020' txt5='Checked-in' />
        <Bookingdetail txt='golimono' txt1='yveno' txt2='104' txt3='23/dec/2020' txt4='25/dec/2020' txt5='Checked-in' />
    </div>
  )
}

export default Bookings