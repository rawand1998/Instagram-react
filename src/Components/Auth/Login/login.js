import React ,{useState,useEffect} from 'react'
import {Link} from 'react-router-dom'
import {auth,db} from '../../../firebase/firebase'
import {useNavigate} from 'react-router-dom'
import {login,selectName} from '../../../features/User/UserSlice'
import  {useDispatch} from 'react-redux'
import { FaGoogle } from "react-icons/fa";
// import{img} from '../../../assets/app.jpg'
import './Style.css'
function Login() {
  const nav = useNavigate()
  const [email,setEmail] =useState("")
  const [password,setPassword] =useState("")
  const dispatch = useDispatch()
const register=()=>{
nav('/register')
}
const login=()=>{
  auth.signInWithEmailAndPassword(email,password).then((userAuth)=>{
    dispatch(login({
      email: userAuth.user.email,
     uid: userAuth.user.uid,
     displayName: userAuth.user.displayName,
    // photoUrl: userAuth.user.photoURL,

    }))

  })

}
  return (
    <div className="login-container">
      <div className="login">
      <div className="logo">
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/2560px-Instagram_logo.svg.png"/>
      </div>
      <div className="form-login">
        <input placeholder="Phone,number ,username or email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
        <input placeholder="Password" type="password" value={password} onChange={(e)=>setPassword(e.target.value)}/>
        <button onClick={login}>Login</button>
        <div className="Or">
          <div className="before-or"></div>
          <div className="or-word">OR</div>
          <div className="after-or"></div>
        </div>
      </div>

      <div className="login-with-google-login">
        <div className="google">
        <FaGoogle className="google-icon" />
        <a> Login with Google</a>
        </div>
        
        <a className="forget-password">Forget Your Password?</a>
      </div>
      </div>
      <div className="account">
        <p>Don`t have a account? <a onClick={register}> Sign up</a></p>
      </div>
  <div className="app-store">
    <p>Get the app</p>
    <div className="img-app">
    <img  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcReKnbTiSbjFS4GjHahg5eBK2LJaaL_M8yG5xekUYvpaKyciuCUZWzk7V4Bi0IhGRPDYsc&usqp=CAU"/>

    </div>
  </div>
    </div>
  )
}

export default Login