import React from 'react'
import './Bookingdetail.css'
const Bookingdetail = ({txt,txt1,txt2,txt3,txt4,txt5}) => {
  return (
  
    <div className='booking-header-detail'>
        <div className="det">{txt}</div>
        <div className="det">{txt1}</div>
        <div className="det">{txt2}</div>
        <div className="det">{txt3}</div>
        <div className="det">{txt4}</div>
        <div className="det">{txt5}</div>
      </div>

  )
}

export default Bookingdetail