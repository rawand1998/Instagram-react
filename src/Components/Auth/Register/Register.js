import React from 'react'
import {Link} from 'react-router-dom'
import {auth,db} from '../../../firebase/firebase'
function Register() {
  return (
    <div>
      <div className="logo">
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/2560px-Instagram_logo.svg.png"/>
        <p></p>
        <button>Login in with Google</button>
      </div>
      <div className="form-login">
        <input placeholder="Phone,number ,username or email"/>
        <input placeholder="Full name"/>
        <input placeholder="Username"/>
        <input placeholder="Password"/>
        <p>People who use our service may have uploaded your contact information to Instagram. Learn More
</p>
<p>By signing up, you agree to our Terms , Data Policy and Cookies Policy .</p>
        <button>Sign up</button>
        
      </div>

   
      <div>
        <p> Have a account <Link to="register">Sign up</Link></p>
      </div>

    </div>
  )
}

export default Register