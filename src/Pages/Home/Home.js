import React,{useEffect} from 'react'
import PostList from '../../Components/PostList/PostList'
import Story from '../../Components/Story/Story'
import ContactStuff from '../../Components/ContactStuff/ContactStuff'
import {useDispatch} from 'react-redux'
import {onAuthStateChanged} from 'firebase/auth'
import {auth} from '../../firebase/firebase'
import {setLogIn,setLogOut} from '../../features/User/UserSlice'

import './Style.css'
function Home() {
  const dispatch = useDispatch()
  useEffect(()=>{
    onAuthStateChanged(auth,((user)=>{
      if(user){
        dispatch(setLogIn({
          name:user.displayName,
          email:user.email,
          uid: user.uid,
          photo: user.photoURL,
        }))
      }else{
        dispatch(setLogOut({
          name:null,
          email:null,
          photo:null,
          uid:null,
        }))
      }
    
    }))
  })
  return (
    <div className="home-container">
        <div className="section">
            <Story />
            <PostList />
        </div>
        <div className="sect">
            <ContactStuff />
        </div>
    </div>
  )
}

export default Home