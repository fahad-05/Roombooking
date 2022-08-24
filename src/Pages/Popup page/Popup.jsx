import React from 'react'
import './Roomscreate.css'
import Buttonstyle from '../../Components/Buttontype/Buttonstyle'
import { Link } from 'react-router-dom'
import Mainheader from '../../Components/Header/Mainheader'

const Roomscreate = () => {
  return (
    <>
    <Mainheader/>
    <div className='room-num-container'>
      <div className="room-number-101">
        <div className="room-header">Room 101</div>
        <div className="room-num">
        <div className='ab'>Room Number</div>
          <input className='ab' type="number" name=" "  />
        </div>
        <div className="room-num">
        <div className='b'>Adult Capacity</div>
          <input className='b' type="number" name=" "  />
        </div>
        <div className="room-num">
        <div className='b'>Children Capacity</div>
          <input className='b' type="number" name=" "  />
        </div>
        <div className="room-num">
        <div className='b'>Price</div>
          <input className='b' type="number" name=" "  />
        </div>
      <div className="save">
        <Buttonstyle type="primary" label="save"/>
        <div>or</div>
        <div className="cancel-link"><Link to={'/'} className='linkback'>Cancel</Link></div>
      </div>
      
      </div>
      </div>
      </>
  )
}

export default Roomscreate