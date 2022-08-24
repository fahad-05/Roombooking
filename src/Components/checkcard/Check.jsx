import React from 'react'
import './style.css'

const Index = ({Fname,Lname,Date,num,buttonLabel}) => {
  return (
    <div className='checkin1'>
      <div className="name">
        <b>{Fname}</b>.{Lname}<br/>{Date}
      </div>
      <div className="num">
        {num}
      </div>
      <div className="buttond">
        <div className='buttonf'>{buttonLabel}</div>
      </div>
    </div>
  )
}

export default Index