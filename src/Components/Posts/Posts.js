import React,{useState,useEffect} from 'react'
import PostList from '../PostList/PostList'
import {db} from '../../firebase/firebase'
function Posts() {
    const [posts,setPosts] = useState([])
    useEffect(() =>{
        db.collection('insta').onSnapshot((snapshot) =>{
            
            setPosts(snapshot.docs)
        })
    }
    )
  return (
    <div>
        {posts.map((post) =>
          <PostList key={post?.id} p={post?.data().caption} name={post.data().name}
          avatar={post.data().img} email={post.data().email} id={post.id} img={post.data().photo}
          />
        )}
      
    </div>
  )
}

export default Posts