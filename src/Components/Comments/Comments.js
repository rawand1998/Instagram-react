import React ,{useState}from 'react'
import './Style.css'
import Avatar from "@mui/material/Avatar";
function Comments({comment,name,avatar,id}) {
    console.log(comment,"comment")
    const [comments,setComments] = useState(false)
    const commentInput = comments? comment.slice(" ","100") : comment;
  return (
    <div className="comment-wrapper">
        <div className="user-stuff">
            <Avatar src={avatar} />
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
        
      
    </div>
  )
}

export default Comments