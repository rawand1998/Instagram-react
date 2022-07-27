import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import img from '../../assets/high.PNG'
import { selectName, selectPhoto } from "../../features/User/UserSlice";
import { db } from "../../firebase/firebase";
import Header from "../../Components/Header/Header";
import { useParams } from "react-router-dom";
import SettingsIcon from '@mui/icons-material/Settings';
import {FaRegBookmark,FaCamera,FaUserCircle,FaTh} from "react-icons/fa";
import './Style.css'
function Profile() {
  const UserId = useParams();
  const [profileData, setProfileData] = useState([]);
  const name = useSelector(selectName);
  const photo = useSelector(selectPhoto);
  useEffect(() => {
    db.collection("insta")
      .where("uid", "==", UserId.id)
      .onSnapshot((snapshot) => {
        setProfileData(snapshot.docs);
      });
  }, []);
  console.log(profileData);
  return (
    <div>
      <Header />
      <div className="profile-container">
         <div className="user-image-profile"> <img src={photo} /> </div>
         <div className="profile-data">
          <div className="profile-name">
          <span>{name}</span>
          <button>Edit Profile</button>
            <SettingsIcon />
            </div>
            <div className="profile-follower-number">
                <span><strong>45</strong> post</span>
                <span><strong>200</strong> followers</span>
                <span><strong>1000</strong> following</span>
            </div>
            <div className="profile-bio">
              <span >{name}</span>
              <p>Computer Engineering ♥️</p>
              <p>الله سينقذك كما يفعل كل مرة 🤍</p>
            </div>
         </div>
         
        </div>
        <div className="profile-highlight">
          <img  src={img}/>
         </div>
         <div className="posts-navbar">
          <span><FaTh />POSTS</span>
          <span><FaCamera />REELS</span>
          <span><FaRegBookmark />SAVED</span>
          <span><FaUserCircle />TAGGED</span>
         </div>
         <div  className="profile-content">
      {profileData.map((profileData) => (

        <div>
          <div>
            <img src={profileData.data().photo}/>
          </div>
      
        </div>
      ))}
      </div>
    </div>
  );
}

export default Profile;
