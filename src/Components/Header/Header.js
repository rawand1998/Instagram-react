import {
  AddCircleOutline,
  FavoriteBorderRounded,
  Search,
} from "@mui/icons-material";
import firebase from "firebase/compat/app";
import Avatar from "@mui/material/Avatar";
import React, { useState } from "react";
import "./Style.css";
import { useSelector, useDispatch } from "react-redux";
import { auth } from "../../firebase/firebase";
import '@coreui/coreui/dist/css/coreui.min.css'
import {FaRegBookmark,FaUserCircle,FaComment} from "react-icons/fa";
import SettingsIcon from '@mui/icons-material/Settings';
import ExploreSharpIcon from '@mui/icons-material/ExploreSharp';
import {
  setLogOut,
  selectName,
  selectPhoto,
  selectUid,
} from "../../features/User/UserSlice";
import Post from "../../Pages/Post/Post";
import { useNavigate } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import { CDropdown,CDropdownToggle,CDropdownMenu,CDropdownItem } from '@coreui/react';

function Header() {
  const username = useSelector(selectName);
  const [show, setShow] = useState(false);
  const photo = useSelector(selectPhoto);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userid = useSelector(selectUid);
  const name = useSelector(selectName)


  const showPost = (e) => {
    e.preventDefault();
    setShow(!show);
    console.log(show);
  };
  const login = ()=>{
    navigate('/login');
  }
  const porfilePage = () => {
    navigate(`/profile/${userid}`);
  };
  const home=()=>{
    navigate('/');
  }
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
    <div className="header-contanier">
      <div className="wrapper">
        <div className="headerLogo">
          <img
            alt="not found"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/2560px-Instagram_logo.svg.png"
          />
        </div>
        <div className="SearchContainer">
          <Search />
          <input type="search" placeholder="Search" />
        </div>
        <div className="HeaderRight">
          {username ? (
            <>
              <li className="List">
                <FaHome className="rotate nav-icon" onClick={home}/>
              </li>
              <div className="Down">
                <li className="List">
                  <AddCircleOutline onClick={showPost} />
                  {show && <Post show={show} setShow={setShow} />}
                </li>
                <li className="List">
                  {" "}
                  <ExploreSharpIcon className="nav-icon"/>
                </li>
                <li className="List">
                  {" "}
                  <FaComment className="nav-icon comment-nav"/>
                </li>
                <li className="List">
                  {" "}
                  <FavoriteBorderRounded className="nav-icon"/>
                </li>
                <div className="List">
                  {/* {" "}
                  <Avatar src={photo} onClick={porfilePage} className="user-img"/> */}
                  <CDropdown className="dropdown">
                    <CDropdownToggle className="drop">
                    <Avatar src={photo}  className="user-img"/> 
                    {/* dop */}
                    </CDropdownToggle>
                    <CDropdownMenu className="CDropdownMenu">
                      <CDropdownItem className ="CDropdownItem" onClick={porfilePage} ><FaUserCircle className="icon"/>Profile</CDropdownItem>
                      <CDropdownItem className ="CDropdownItem"><SettingsIcon className="icon"/>Settings</CDropdownItem>
                      <CDropdownItem className ="CDropdownItem"><FaRegBookmark className="icon" />Saved</CDropdownItem>
                      <CDropdownItem className ="CDropdownItem switch-menu">Switch account</CDropdownItem>
                      <CDropdownItem className ="CDropdownItem logout-menu" onClick={logout}>
                      Logout
                      </CDropdownItem>
                    </CDropdownMenu>
                  </CDropdown>
                </div>
              </div>
            </>
          ) : (
            <button className="buttons" onClick={login}>
              Login
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default Header;
