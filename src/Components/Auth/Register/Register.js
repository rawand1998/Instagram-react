import React, { useState } from "react";
import { Link } from "react-router-dom";
import { auth, db } from "../../../firebase/firebase";
import { useSelector, useDispatch } from "react-redux";
import "./Style.css";
import {
  setLogIn,
  selectName,
  selectPhoto,
} from "../../../features/User/UserSlice";
import firebase from "firebase/compat/app";
import { useNavigate } from "react-router-dom";
import { updateProfile } from "firebase/auth";

function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [profilePic, setProfilePic] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const loginWithGoogle = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    auth
      .signInWithPopup(provider)
      .then((res) => {
        const user = res.user;
        dispatch(
          setLogIn({
            name: user.displayName,
            email: user.email,
            uid: user.uid,
            photo: user.photoURL,
          })
        );
      })
      .then(() => {
        navigate("/");
      });
  };
  const login = () => {
    navigate("/login");
  };
  const register = () => {
    auth.createUserWithEmailAndPassword(email, password).then((userAuth) => {
      console.log(userAuth,"userAuth")
      updateProfile(userAuth.user, {
        displayName: name,
        photoURL: profilePic,
      })
        .then(
          dispatch(
            login({
              email: userAuth.user.email,
              uid: userAuth.user.uid,
              displayName: name,
              photoUrl: profilePic,
            })
          )
        )
        .catch((error) => {
          console.log("user not updated");
        });
    });
  };
  return (
    <div className="register-container">
      <div className="register">
        <div className="logo">
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/2560px-Instagram_logo.svg.png" />
          <p>Sign up to see photos and videos from your friends.</p>
          <button onClick={loginWithGoogle}>Login in with Google</button>
          <div className="Or">
            <div className="before-or"></div>
            <div className="or-word">OR</div>
            <div className="after-or"></div>
          </div>
        </div>

        <div className="form-register">
          <input
            placeholder="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            placeholder="Full name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            value={profilePic}
            placeholder="image"
            type="text"
            onChange={(e) => setProfilePic(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <p>
            People who use our service may have uploaded your contact
            information to Instagram. Learn More
          </p>
          <p>
            By signing up, you agree to our Terms , Data Policy and Cookies
            Policy .
          </p>
          <button onClick={register}>Sign up</button>
        </div>
      </div>
      <div className="register-account">
        <p>
          {" "}
          Have a account? <a onClick={login} className="auth-word">Login</a>
        </p>
      </div>
      <div className="app-store">
        <p>Get the app</p>
        <div className="img-app">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcReKnbTiSbjFS4GjHahg5eBK2LJaaL_M8yG5xekUYvpaKyciuCUZWzk7V4Bi0IhGRPDYsc&usqp=CAU" />
        </div>
      </div>
    </div>
  );
}

export default Register;
