import React from 'react'
import { useState,useEffect } from 'react'
import './Rooms.css'
import Mainheader from '../../Components/Header/Mainheader'
import Roomdetail from '../../Components/Room detail/Roomdetail'
import { Link } from 'react-router-dom'
const Rooms = () => {
const [newData, setNewData] = useState([]);




useEffect(() => {
  const userData = async () => {
    const response = await GetData();
    setNewData(response);
  };
  userData();
}, []);
async function GetData() {
  const response = await fetch("http://localhost:5243/room", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  return response.json();
}





  return (
    <>
    <Mainheader/>
    <div className='container-rooms'>
      <h5 className='createroom-link'><Link to={'/roomscreate'} className='link8'>Create Room</Link></h5>
    <h2 className="Rooms-head">Rooms</h2>
    <div className="table-body">
    <div className="bodyroom">
      <div className="head1">Room Number</div>
      <div className="head2">Adults Capacity</div>
      <div className="head3">Children Capacity</div>
      <div className="head4">Price</div>
    </div>
    {newData.map((value, index) => (
            <Roomdetail
              a={value.roomno}
              b={value.adultno}
              c={value.childno}
              d={value.price}
            />
          ))}
    </div>
    </div>
    </>
  )
}

export default Rooms