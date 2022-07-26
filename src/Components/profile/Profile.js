import React, { useEffect, useState } from "react";

import { db } from "../../firebase/firebase";

import { useParams } from "react-router-dom";
function Profile() {
  const UserId = useParams();
  const [profileData, setProfileData] = useState([]);

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
      {profileData.map((profileData) => (
        <h1>{profileData.data().caption}</h1>
      ))}
    </div>
  );
}

export default Profile;
