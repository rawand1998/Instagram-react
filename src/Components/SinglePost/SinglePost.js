import React, { useState, useEffect } from "react";
import {
    addDoc,
    collection,
    query,
    onSnapshot,
    orderBy,
    doc,
    setDoc,
  } from "@firebase/firestore";
  import { db } from "../../firebase/firebase";
import "./Style.css";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { useSelector } from "react-redux";
import { FavoriteBorderRounded, SendRounded } from "@mui/icons-material";
import {
  selectName,
  selectPhoto,
  selectUid,
} from "../../features/User/UserSlice";
import { FaComment } from "react-icons/fa";
import Comments from "../Comments/Comments";
import Header from "../../Components/Header/Header";
import { useParams } from "react-router-dom";
import { serverTimestamp } from "@firebase/firestore";
function SinglePost() {
  const UserId = useParams();
  const [posts, setPosts] = useState([]);
 const [id,setId] = useState('')
 const [input,setInput] = useState('')
 const userName = useSelector(selectName);
  const photo = useSelector(selectPhoto);
  const [comment, setComment] = useState([]);
  const [liked, setLikeed] = useState(false);
  const [likes, setLikes] = useState([]);
  useEffect(() => {
    return db
      .collection("insta")
      .doc(UserId.id)
      .onSnapshot((snapshot) => {
        setPosts(snapshot.data());
        setId(snapshot.data().uid);
        console.log(snapshot.data(), "single page",id);
      });
  }, [UserId]);
  useEffect(() => {
    return onSnapshot(
      query(collection(db, "insta", UserId.id, "comment"), orderBy("timestamp")),
      (snapshot) => {
        setComment(snapshot.docs);
      }
    );
  }, [id]);
  const submit = async (e) => {
    e.preventDefault();
  
    if (input.length > 1) {
     
      await addDoc(collection(db, "insta", UserId.id, "comment"), {
        name: userName,
        comment: input,
        photo: photo,
        timestamp: serverTimestamp(),
      });
    }
  };
  return (
    <div>
      <Header />
      <div className="singlePage-container">
        <div className="singlePage-image">
          <img src={posts.photo} />
        </div>
        <div className="singlePage-info">
          <div className="single-info">
            <div className="info">
              <img src={posts.img} />
              <span>{posts.name}</span>
            </div>
            <div style={{ background: "#fff" }}>
              {" "}
              <MoreHorizIcon className="moreHorizanIcon" />
            </div>
          </div>
        
          <div className="comment-display">
        {comment.map((post) => (
          <Comments
            comment={post.data().comment}
            name={post.data().name}
            avatar={post.data().photo}
            id={post.id}
          />
        ))}
      </div>

      <div className="social soical-single">
        {!liked ? (
          <FavoriteBorderRounded  className="loved" />
        ) : (
          <FavoriteBorderRounded style={{ color: "red" }}  />
        )}

        <FaComment className="comment" />
        <SendRounded />
      </div>
      <div className="comment-section single-comment">
        <div className="input-conatiner">
          <input
            type="text"
            placeholder="Add a Comment"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <button onClick={submit}>
            {/* {loading ? "Posting" : "Post"}  */}
            post
          </button>
        </div>
      </div>
        </div>
      </div>
    </div>
  );
}

export default SinglePost;
