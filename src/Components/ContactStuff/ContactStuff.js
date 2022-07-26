import Avatar from "@mui/material/Avatar";
import React from 'react'
import './Style.css'
import {useSelector,useDispatch} from 'react-redux'
import {auth} from '../../firebase/firebase'
import {selectName,selectPhoto,setLogOut} from '../../features/User/UserSlice'

function ContactStuff() {
  const name = useSelector(selectName)
  const photo = useSelector(selectPhoto)
  const dispatch = useDispatch()
  const logout = ()=>{
    auth.signOut().then((res)=>{
      dispatch(setLogOut({
        name:null,
        email:null,
        photo:null,
        uid:null,
      }))
    })
  }
  return (
    <div className="contact-conatiner">
      <div className="contact-warrp">

        <div className="contact-user">
          <Avatar src={photo} className="user-img"/>
          <span className="username-contact">  {name}</span>
        </div>
        <div onClick={logout}>Logout</div>
      </div>
    </div>
  )
}

export default ContactStuff