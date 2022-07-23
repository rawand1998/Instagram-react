import Avatar from "@mui/material/Avatar";
import React from 'react'
import './Style.css'
function ContactStuff() {
  return (
    <div className="contact-conatiner">
      <div className="contact-warrp">

        <div className="contact-user">
          <Avatar />
          <span>welcome to info</span>
        </div>
        <div>Logout</div>
      </div>
    </div>
  )
}

export default ContactStuff