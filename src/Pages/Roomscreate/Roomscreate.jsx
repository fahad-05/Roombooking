import { useState } from 'react'


import React from 'react'
import './Roomscreate.css'
import Buttonstyle from '../../Components/Buttontype/Buttonstyle'
import { Link } from 'react-router-dom'
import Mainheader from '../../Components/Header/Mainheader'

const Roomscreate = () => {
  const [item,setItem]=useState({roomno:'',adultno:'',childno:'',price:''})
  const clearform = () => {
    setItem({ roomno : "", adultno : "", childno : "", price : ""})
  }
  
  async function Signup(e){
    if (e.target.value !== 0) {
    try{
    e.preventDefault();
    console.log(item);
    
    

      // let item={roomno,adultno,childno,price}
      let result=await fetch("http://localhost:5243/room",{
      method:'POST',
      body:JSON.stringify(item),
      headers:{
        "content-type":'application/json',
        "Accept":'application/json'
      }  
      
    })
  
    result=await result.json()
    alert("Room Saved")
    clearform();
  }
  catch
  {
     alert('ERROR_CONNECTION_TIMED_OUT');
  }
}
  else{
    alert('input value is empty');
  }
}

  
  function onChange(value,key){
    setItem((prev)=>({...prev,[key]:value}))
  }



  return (
    <>
    <Mainheader/>
    <div className='room-num-container'>
      <form name='roomform' onSubmit={Signup}>
      <div className="room-number-101">
        <div className="room-header">Create Room</div>
        <div className="room-num">
        <div className='ab'>Room Number</div>
          <input className='ab' type="number" name=" " value={item.roomno} onChange={(e)=>{onChange(e.target.value,'roomno')}}/>
        </div>
        <div className="room-num">
        <div className='b'>Adult Capacity</div>
          <input className='b' type="number" name=" " value={item.adultno} onChange={(e)=>{onChange(e.target.value,'adultno')}}  />
        </div>
        <div className="room-num">
        <div className='b'>Children Capacity</div>
          <input className='b' type="number" name=" " value={item.childno} onChange={(e)=>{onChange(e.target.value,'childno')}}/>
        </div>
        <div className="room-num">
        <div className='b'>Price</div>
          <input className='b' type="number" name=" " value={item.price} onChange={(e)=>{onChange(e.target.value,'price')}} />
        </div>
      <div className="save">
        <Buttonstyle type="primary" label="save"/>
        <div>or</div>
        <div className="cancel-link"><Link to={'/'} className='linkback'>Cancel</Link></div>
      </div>
      
      </div>
      </form>
      </div>
      </>
  )
}

export default Roomscreate