import React from 'react'
import './nbooking.css'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import Mainheader from '../../Components/Header/Mainheader'

const Newbooking = () => {

  const[display,setDisplay] = useState(false)
  const changeDisplay=()=>{
    setDisplay(true);
    console.log(display);
  }
  const [item,setItem]=useState({GuestLastName:"",GuestFirstName:"", CheckInDate:"", CheckOutDate:"", NumberOfAdults:"",NumberOfChildren:""})
  const clearform = () => {
    setItem({GuestLastName:"",GuestFirstName:"", CheckInDate:"", CheckOutDate:"", NumberOfAdults:"",NumberOfChildren:""})
  }
  async function Signup(e){
   
    try{
      e.preventDefault();
      console.log(item)
   

      let result=await fetch("http://localhost:5243/bookings",{
        method:'POST',
        body:JSON.stringify(item),
        headers:{
          "content-type":'application/json',
          "Accept":'application/json'
        }  
    })
    result = await result.json()
    clearform();
    alert("saved")
    }
    catch
{
  alert('ERROR_CONNECTION_TIMED_OUT');
}  
  }
  function onChange(value,key){
    setItem((prev)=>({...prev,[key]:value}))
  }



  return (
    <div className='container1'>
      <Mainheader/>
      <div className="header1"><h1>New Booking</h1>
      </div>
      <div className="main1">
        <form onSubmit={Signup}>
          <div className="lname a">
          <label>Guest Last Name</label>
          <div>
          <input className='i' type="text" name=" "  onChange={(e)=>{onChange(e.target.value,'GuestLastName')}} />
            </div>
          </div>
          <div className="fname a">
          <label>Guest First Name</label>
          
          <div>
          <input className='i' type="text" name=" "  onChange={(e)=>{onChange(e.target.value,'GuestFirstName')}} />
          </div> 
          </div>
          <div className="checkd a">
          <label>Checked in Date</label>
          
          <div>
          <input className='i' type="date" name=" "  onChange={(e)=>{onChange(e.target.value,'CheckInDate')}} />
            </div>
          </div>
          <div className="checkind a">
          <label>Checked Out Date</label>
          <div>
          <input className='i' type="date" name=" "  onChange={(e)=>{onChange(e.target.value,'CheckOutDate')}} />
            </div>
          </div>
          <div className="numadults a">
          <label>Number Of Adults</label>
          <div>
          <input className='i' type="number" name=" "  onChange={(e)=>{onChange(e.target.value,'NumberOfAdults')}} />
            </div>
          </div>
          <div className="numchildren a">
          <label>Number Of Children</label>
          <div><input className='i' type="number" name=" "  onChange={(e)=>{onChange(e.target.value,'NumberOfChildren')}} /> 
          </div>  
          </div>
        </form>
        <div className="buttonb" onClick={Signup}><Link to={'/availableroom'} className='link1'>
          <h4><b>Get Available Room</b></h4></Link></div>
      </div>
      </div>
  )
}

export default Newbooking