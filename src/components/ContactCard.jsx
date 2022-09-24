import React from 'react'
import user from '../images/user.jpg'

function ContactCard(props) {
  const {id, name, email} = props.contact;
  return (
    
    <div className="item1">
      
      <div className="content">
      <img src={user} alt="user" className='ui avatar image'/>
        <div>
        <div className="header">{name}</div>
        <div>{email}</div>
        <div className='id'>{id}</div>
        </div>
      </div>
      <i className='trash alternate outline icon'
        onClick={() => props.clickHandler(id)}
      ></i>
    </div>
  )
};

export default ContactCard