import React from 'react'

function Comments({comment,name,avatar}) {
    console.log(comment,"comment")
  return (
    <div>
        {comment}
    </div>
  )
}

export default Comments