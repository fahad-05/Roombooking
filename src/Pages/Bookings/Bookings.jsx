import React from 'react'
import './Bookings.css'
import Buttonstyle from '../../Components/Buttontype/Buttonstyle'
import { Link } from 'react-router-dom'
import Mainheader from '../../Components/Header/Mainheader'
import Bookingdetail from '../../Components/Bookingdetail/Bookingdetail'
import { useState,useEffect } from 'react'
const Bookings = () => {


  const [newData, setNewData] = useState([]);
  useEffect(() => {
    const userData = async () => {
      const response = await GetData();
      setNewData(response);
    };
    userData();
  }, []);
  async function GetData() {
    const response = await fetch("http://localhost:5243/bookings", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
   
    return response.json();
  }



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
    
    {newData.map((value, index) => (
      <Bookingdetail
        txt={value.guestLastName}
        txt1={value.guestFirstName}
        txt2={value.checkInDate}
        txt3={value.checkOutDate}
        txt4={value.numberOfAdults}
        txt5={value.numberOfChildren}
        />
        ))}
        </div>


  )
}

export default Bookings