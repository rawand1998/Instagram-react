import {
  AddCircleOutline,
  FavoriteBorderRounded,
  SendRounded,
  Search,
} from "@mui/icons-material";
import firebase from "firebase/compat/app";
import Avatar from "@mui/material/Avatar";
import React,{useState} from "react";
import "./Style.css";
import {useSelector,useDispatch} from 'react-redux'
import {auth} from '../../firebase/firebase'
import {setLogIn,selectName,selectPhoto,selectUid} from '../../features/User/UserSlice'
import Post from '../../Pages/Post/Post'
import {Link} from 'react-router-dom'
import {useNavigate} from 'react-router-dom'
import { FaHome } from "react-icons/fa";
function Header() {

  const username = useSelector(selectName);
const [show,setShow]= useState(false)
  const photo= useSelector(selectPhoto);
  const dispatch = useDispatch()
  const navigate = useNavigate();
  // const navigation = useNavigate();
const userid=useSelector(selectUid)
  const Login=()=>{
    navigate('/login')
    // navigate('/login', {replace: true});
  }
  const showPost = (e)=>{
    e.preventDefault()
    setShow(!show)
    console.log(show)
  }
  const porfilePage = ()=>{
    
    navigate(`/profile/${userid}`)
  }
  return (
    <div className="header-contanier">
      <div className="wrapper">
        <div className="headerLogo">
          <img alt = "not found"  src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/2560px-Instagram_logo.svg.png" />
        </div>
        <div className="SearchContainer">
          <Search />
          <input type="search" placeholder="Search" />
        </div>
        <div className="HeaderRight">
          {username ? (
            <>
              <li className="List">
                <FaHome className="rotate" />
              </li>
              <div className="Down">
                <li className="List">
                  <AddCircleOutline  onClick={showPost}/>
                  {show && <Post show={show} setShow={setShow} />}
                </li>
              

                <li className="List">
                  {" "}
                  <FavoriteBorderRounded />
                </li>
                <li className="List">
                  {" "}
                  <Avatar src={photo} onClick={porfilePage} className="user-img"/>
                </li>
              </div>
             
            </>
          ) : (
            <button className="buttons" onClick={Login} to="login">Login</button>
           
   
          )}
        </div>
      </div>
    </div>
  );
}

export default Header;
