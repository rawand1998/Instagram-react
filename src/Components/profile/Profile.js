import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import { selectName, selectPhoto } from "../../features/User/UserSlice";
import { db } from "../../firebase/firebase";
import Header from "../../Components/Header/Header";
import { useParams } from "react-router-dom";
import SettingsIcon from '@mui/icons-material/Settings';
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
         <div> <img src={photo} /> </div>
         <div className="profile-data">
          <div className="profile-name">
          <span>{name}</span>
          <button>Edit Profile</button>
            <SettingsIcon />
            </div>
            <div className="profile-follower-number">
                <span>45 post</span>
                <span>200 followers</span>
                <span>1000 following</span>
            </div>
            <div className="profile-bio">
              <span>{name}</span>
              <p>Computer Engineering ♥️</p>
              <p>الله سينقذك كما يفعل كل مرة 🤍</p>
            </div>
         </div>
        </div>

      {profileData.map((profileData) => (

        <div></div>
      ))}
    </div>
  );
}

export default Profile;
