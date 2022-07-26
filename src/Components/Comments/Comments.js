import React ,{useState}from 'react'
import './Style.css'
import Avatar from "@mui/material/Avatar";
import {
   
    FavoriteBorderRounded,
  
  } from "@mui/icons-material";
function Comments({comment,name,avatar,id}) {
 
    const [comments,setComments] = useState(false)
    const commentInput = comments? comment.slice(" ","100") : comment;
  return (
    <div className="comment-wrapper">
        <div className="user-stuff">
            <Avatar src={avatar} className="avatar-comment"/>
            <span>{name}</span>
            {commentInput.length >=90 ? (
                <>
                {!comments ?(
                    <>
                    {commentInput}
                    <button onClick={setComments(true)}>Read More</button>
                    </>
                ):(
                    <>
                     {commentInput}
                    <button onClick={setComments(false)}>Read Less</button>
                    </>
                ) }
                </>
            ):<p>{commentInput}</p>}
            {/* <p>{comment}</p> */}
        </div>
        <div className="fav">
        <FavoriteBorderRounded className="favorite" />
        </div>
      
    </div>
  )
}

export default Comments