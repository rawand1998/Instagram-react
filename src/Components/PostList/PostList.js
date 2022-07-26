import Avatar from "@mui/material/Avatar";
import React, { useState, useEffect } from "react";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { deleteDoc, serverTimestamp } from "@firebase/firestore";
import { FavoriteBorderRounded, SendRounded } from "@mui/icons-material";
import "./Style.css";
import { useSelector } from "react-redux";
import {
  selectName,
  selectPhoto,
  selectUid,
} from "../../features/User/UserSlice";
import { FaComment } from "react-icons/fa";
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
import Comments from "../Comments/Comments";
import {useNavigate} from 'react-router-dom'
function PostList({ p, name, email, img, avatar, id,uid }) {
  const [input, setInput] = useState("");
  const [comment, setComment] = useState([]);
  const [loading, setLoading] = useState(false);
  const userName = useSelector(selectName);
  const photo = useSelector(selectPhoto);
  const [liked, setLikeed] = useState(false);
  const [likes, setLikes] = useState([]);
  const userId = useSelector(selectUid);
  const navigate = useNavigate();
  useEffect(() => {
    return onSnapshot(
      query(collection(db, "insta", id, "comment"), orderBy("timestamp")),
      (snapshot) => {
        setComment(snapshot.docs);
      }
    );
  }, [id]);
  const submit = async (e) => {
    e.preventDefault();
    console.log("hi", input);
    if (input.length > 1) {
      setLoading(true);
      await addDoc(collection(db, "insta", id, "comment"), {
        name: userName,
        comment: input,
        photo: photo,
        timestamp: serverTimestamp(),
      });
    }

    // console.log(input,"input")
    // db.collection('comment').add({

    //   name: userName,
    //   comment: input,
    //   photo: photo,
    //   timestamp: serverTimestamp(),
    // })
    // setInput("");
    // setLoading(false);
  };
  useEffect(() => {
    return onSnapshot(collection(db, "insta", id, "likes"), (snapshot) => {
      setLikes(snapshot.docs);
    });
  }, [id]);
  const Post = async () => {
    if (liked) {
      await deleteDoc(doc(db, "insta", id, "likes", userId));
    } else {
      await setDoc(doc(db, "insta", id, "likes", userId), {
        name: name,
      });
    }
  };
  const porfilePage = (uid)=>{
    
    navigate(`/profile/${uid}`)
  }
  return (
    <div className="postlist">
      <div className="postHeader">
        <div className="user">
          <Avatar src={avatar} alt="post" className="user-img" />
          <span onClick={()=>porfilePage(uid)}>{name}</span>
        </div>
        <MoreHorizIcon />
      </div>
      <div className="post-conatiner">
        <img loading="lazy" alt="post" src={img} className="post-image" />
      </div>
      <div className="social">
        {!liked ? (
          <FavoriteBorderRounded onClick={Post} />
        ) : (
          <FavoriteBorderRounded style={{ color: "red" }} onClick={Post} />
        )}
        <div className="absolute">
          {likes.length > 0 && <p>{likes.length}</p>}likes
        </div>
        <FaComment className="comment" />
        <SendRounded />
      </div>
      <div className="caption">
        <div>
          <span>{name}</span>
          <p>{p}</p>
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
      <div className="comment-section">
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
  );
}

export default PostList;
