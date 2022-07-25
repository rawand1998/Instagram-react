import React, { useEffect } from "react";
import PostList from "../../Components/PostList/PostList";
import Story from "../../Components/Story/Story";
import ContactStuff from "../../Components/ContactStuff/ContactStuff";
import { useDispatch,useSelector } from "react-redux";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../firebase/firebase";
import { setLogIn, setLogOut,selectUid } from "../../features/User/UserSlice";
import Posts from "../../Components/Posts/Posts";
import Login from "../../Components/Auth/Login/login";
import Header from "../../Components/Header/Header";
import "./Style.css";
function Home() {
  const dispatch = useDispatch();
  const user = useSelector(selectUid);
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch(
          setLogIn({
            name: user.displayName,
            email: user.email,
            uid: user.uid,
            photo: user.photoURL,
          })
        );
      } else {
        dispatch(
          setLogOut({
            name: null,
            email: null,
            photo: null,
            uid: null,
          })
        );
      }
    });
  });
  return (
    <div>
       
      {user ? (
        <div>
        <Header />
        <div className="home-container">
          
          <div className="section">
            <Story />
            <Posts />
          </div>
          <div className="sect">
            <ContactStuff />
          </div>
        </div>
        </div>
      ) : (
        <Login />
      )}
    </div>
  );
}

export default Home;
