import React from 'react'
import {Link} from 'react-router-dom'
import {auth,db} from '../../../firebase/firebase'

function login() {
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
        <p>Don`t have a account <Link to="register">Sign up</Link></p>
      </div>

    </div>
  )
}

export default login