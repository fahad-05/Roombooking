import React from 'react'
import './Main-header.css'
import suitcase from'../../Assets/Icons/suitcase.svg'
import avatar from '../../Assets/Icons/avatar.svg'
import entry from '../../Assets/Icons/entry.svg'
import logout from '../../Assets/Icons/logout.svg'
import{Link} from 'react-router-dom'
import { useState } from 'react'
const Mainheader = () => {
    const [click,setClick]=useState(false)
    const[disp,setDisp]=useState(false)
  return (
    <div className='header'>
    <div class="suitcase">
                     <img className='suitcaseimg' src={suitcase} alt="suitcase" />

    </div>
    <div class="bookings box">Bookings</div>
    <div class="homepage box"><Link to={'/homepage'} className='link'>Homepage</Link></div>

    <div className="roomcontainer">
    <div class="room box" onClick={()=>{setDisp(!disp)}}>Room</div>
      <div className={disp?'roomin':'roomin1'}>
      <div className='rooms'><Link to={'/rooms'} className='link'>Rooms</Link></div>
        <div className='room-number'><Link to={'/roomscreate'} className='link'>Room Create</Link></div>
        </div>    
      </div>   



    <div class="booking box">
      <div className="book" onClick={()=>{setClick(!click)}}>Booking
      </div>
      <div className={click?'click':'disableclick'}
      >
        <div className='b'><Link to={'/bookings'} className='link'>Bookings</Link></div>
        <div className='b'><Link to={'/newbooking'} className='link'>New Bookings</Link></div>
      </div>



    </div>
    <div className="empty box"></div> 
    <div className="main-avatar box">
    <div className="avatar">
                    <img className='avatarimg' src={avatar} alt="avatar" />


    </div>
    <div className="administrator">Administrator</div>
    <div className="loginlogo box1">
                
                    <img className='loginlogoimg' src={logout} alt="logout" 
                    // onClick={()=>navigate("/Admin")}
                    />
                    
    </div>
    </div>

    </div>
  )
}

export default Mainheader