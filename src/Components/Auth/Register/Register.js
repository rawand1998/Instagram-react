import React from 'react'
import {Link} from 'react-router-dom'
import {auth,db} from '../../../firebase/firebase'
import {useSelector,useDispatch} from 'react-redux'
import {setLogIn,selectName,selectPhoto} from '../../../features/User/UserSlice'
import firebase from "firebase/compat/app";
import {useNavigate} from 'react-router-dom'

function Register() {
  const dispatch = useDispatch()
  const navigate = useNavigate();
  const loginWithGoogle = ()=>{
    const provider = new firebase.auth.GoogleAuthProvider();
      auth.signInWithPopup(provider).then((res)=>{
        const user = res.user
        console.log(user)
        console.log(user.photoURL,user.displayName,user.email,user.uid,"========")
         dispatch(setLogIn({
          name: user.displayName,
          email: user.email,
          uid: user.uid,
          photo:user.photoURL,
         }))
      }).then(()=>{
        navigate('/')
      })
  }
  const login = ()=>{
    navigate('/login')
  }
  return (
    <div>
      <div className="logo">
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/2560px-Instagram_logo.svg.png"/>
        <p></p>
        <button onClick={loginWithGoogle}>Login in with Google</button>
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
        <p> Have a account <a onClick={login}>Login</a></p>
      </div>

    </div>
  )
}

export default Register