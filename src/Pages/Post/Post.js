import React from 'react'
import CollectionsIcon from '@mui/icons-material/Collections';
import './Style.css'
function Post() {
  return (
    <div className="post-container">
        <div className="post-warrp">
            <div className="topSection">
                <CollectionsIcon />
                <input  type="text" className="" hidden/>
            </div>
            <div className="bottomSection">
                <div className="inputContainer">
                    <input  type="text" placeholder="caption"/>
                </div>
                <button>post</button>
            </div>
        </div>
    </div>
  )
}

export default Post