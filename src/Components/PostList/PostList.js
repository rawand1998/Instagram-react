import Avatar from "@mui/material/Avatar";
import React from 'react'
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import {
  
    FavoriteBorderRounded,
    SendRounded,
  
  } from "@mui/icons-material";
  import './Style.css'
  import { FaComment } from "react-icons/fa";
function PostList() {
  return (
    <div className="postlist">
        <div className="postHeader">
            <div className="user">
                <Avatar />
                <span>tino</span>
            </div>
           <MoreHorizIcon />
        </div>
        <div className="post-conatiner">
            <img loading="lazy" alt="post" src="https://images.unsplash.com/photo-1657299170964-205905bb0940?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60"/>
        </div>
           <div className="social">
            <FavoriteBorderRounded />
            <FaComment className="comment" />
            <SendRounded />
           </div>
           <div className="caption">
            <div>
            <span>tino</span>
            <p>hello world</p>
            </div>
           </div>
           <div className="comment-display"></div>
           <div className="comment-section">
            <div className="input-conatiner">
                <input type="text" placeholder="Add a Comment"/>
                <button>post</button>
            </div>
           </div>
    </div>
  )
}

export default PostList