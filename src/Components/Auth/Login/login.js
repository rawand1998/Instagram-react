import React from 'react'
import {Link} from 'react-router-dom'
import {auth,db} from '../../../firebase/firebase'
import {useNavigate} from 'react-router-dom'
function Login() {
  const nav = useNavigate()
 
const register=()=>{
nav('/register')
}
  return (
    <div>
      <div className="logo">
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/2560px-Instagram_logo.svg.png"/>
      </div>
      <div className="form-login">
        <input placeholder="Phone,number ,username or email"/>
        <input placeholder="Password"/>
        <button>Login</button>
        <div>Or</div>
      </div>

      <div className="login-with-google-login">
        <a>Login with Google</a>
        <a>Forget Your Password</a>
      </div>
      <div>
        <p>Don`t have a account <a onClick={register}> Sign up</a></p>
      </div>

    </div>
  )
}

export default Login