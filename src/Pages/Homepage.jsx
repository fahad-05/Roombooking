import React from 'react'
import './Homepage.css'
// import { useNavigate } from 'react-router-dom'
import suitcase from'../Assets/Icons/suitcase.svg'
import avatar from '../Assets/Icons/avatar.svg'
import entry from '../Assets/Icons/entry.svg'
import banner from '../Assets/Images/banner.jpg'
import Check from '../Components/checkcard/Check'
import logout from '../Assets/Icons/logout.svg'
import{Link} from 'react-router-dom'
import { useState } from 'react'
const Homepage = () => {
    const [click,setClick]=useState(false)
    const[disp,setDisp]=useState(false)
    // const navigate=useNavigate();
  return (
    <>
    <div className='main'>
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
        <div className='content'>
          <div className="banner">
                   <img className='bannerimg' src={banner} alt="banner"/>   
          </div>


          <div className="check-wrapper">
          
            <div className="checkin">
              <div className="emblem">
                <img className='loginlogoimg1' src={entry} alt="login"/>  
                <div className="text">  Check in Today</div>    
              </div>             
              <Check Fname="Silva" Lname="Francisco" num="202" Date="2020-02-01" buttonLabel={"Check-In"} />
              <Check Fname="Costa" Lname="Jorge" num={"101"} Date="2020-01-31" buttonLabel={"Check-In"} />

            </div>
            <div className="gapbetween"></div>

            <div className="checkin">
              <div className="emblem">
                <img className='loginlogoimg2' src={logout} alt="logout"/>  
                <div className="text">  Check out Today    
                </div>  
                </div>       
              <Check Fname="Silva" Lname={"Miguel"} num={"104"} Date={"2020-01-28"} buttonLabel={"Check-Out"}/>
            </div>
          </div>

        </div>

    </div>
    {/* ------------------------------Mobileview----------------------- */}

    <div className="main2">
      
    </div>



  </>
  )
}

export default Homepage