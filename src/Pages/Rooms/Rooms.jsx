import React from 'react'
import './Rooms.css'
import Mainheader from '../../Components/Header/Mainheader'
import Roomdetail from '../../Components/Room detail/Roomdetail'
import { Link } from 'react-router-dom'
const Rooms = () => {
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
    <Roomdetail a='101' b='1' c='0' d='34'/>
    <Roomdetail a='102' b='2' c='0' d='48'/>
    <Roomdetail a='103' b='2' c='1' d='52'/>
    <Roomdetail a='104' b='2' c='2' d='64'/>
    <Roomdetail a='201' b='1' c='0' d='34'/>
    </div>
    </div>
    </>
  )
}

export default Rooms