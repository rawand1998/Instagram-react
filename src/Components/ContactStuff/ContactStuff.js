import Avatar from "@mui/material/Avatar";
import React from 'react'
import './Style.css'
import {useSelector} from 'react-redux'
import {selectName,selectPhoto} from '../../features/User/UserSlice'
function ContactStuff() {
  const name = useSelector(selectName)
  const photo = useSelector(selectPhoto)
  return (
    <div className="contact-conatiner">
      <div className="contact-warrp">

        <div className="contact-user">
          <Avatar src={photo} />
          <span>welcome  {name}</span>
        </div>
        <div>Logout</div>
      </div>
    </div>
  )
}

export default ContactStuff