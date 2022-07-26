import React,{useState,useEffect} from 'react'
import PostList from '../PostList/PostList'
import {db} from '../../firebase/firebase'
function Posts() {
    const [posts,setPosts] = useState([])
    useEffect(() =>{
        db.collection('insta').onSnapshot((snapshot) =>{
            
            setPosts(snapshot.docs)
            console.log(snapshot.docs.map(doc => doc.data()))
        })
    },[]
    )
  return (
    <div>
        {posts.map((post) =>
          <PostList key={post?.id} p={post?.data().caption} name={post.data().name}
          avatar={post.data().img} email={post.data().email} id={post.id} img={post.data().photo} uid={post.data().uid}
          />
        )}
      
    </div>
  )
}

export default Posts