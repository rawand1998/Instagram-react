import Avatar from "@mui/material/Avatar";
import React, { useState,useEffect } from "react";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { serverTimestamp } from "@firebase/firestore";
import { FavoriteBorderRounded, SendRounded } from "@mui/icons-material";
import "./Style.css";
import { useSelector } from "react-redux";
import { selectName, selectPhoto } from "../../features/User/UserSlice";
import { FaComment } from "react-icons/fa";
import { addDoc, collection,query,onSnapshot ,orderBy} from "@firebase/firestore";
import { db } from "../../firebase/firebase";
import Comments from '../Comments/Comments'
function PostList({ p, name, email, img, avatar, id }) {
  const [input, setInput] = useState('');
  const [comment,setComment] = useState([]);
  const [loading, setLoading] = useState(false);
  const userName = useSelector(selectName);
  const photo = useSelector(selectPhoto);
  useEffect(()=>{
return onSnapshot(
  query(
    collection(db,'insta',id,'comment'),
    orderBy("timestamp")
  ),
  (snapshot)=>{
    console.log(snapshot.docs,"snaphoe")
    setComment(snapshot.docs)
  }
)
  },[id])
  const submit = async (e) => {
    e.preventDefault();
    console.log("hi",input)
    if(input.length >1){
      setLoading(true)
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
  return (
    <div className="postlist">
      <div className="postHeader">
        <div className="user">
          <Avatar src={avatar} alt="post" />
          <span>{name}</span>
        </div>
        <MoreHorizIcon />
      </div>
      <div className="post-conatiner">
        <img loading="lazy" alt="post" src={img} />
      </div>
      <div className="social">
        <FavoriteBorderRounded />
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
        {comment.map((post)=>
        <Comments comment={post.data().comment} name={post.data().name} avatar={post.data().photo}/>
        )}
      </div>
      <div className="comment-section">
        <div className="input-conatiner">
          <input
            type="text"
            placeholder="Add a Comment"
            value={input}
              onChange={(e) => setInput(e.target.value)}
          />
          <button  onClick={submit}>
            {/* {loading ? "Posting" : "Post"}  */}
            post
          </button>
        </div>
      </div>
    </div>
  );
}

export default PostList;
