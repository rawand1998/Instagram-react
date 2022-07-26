import React ,{useState,useEffect}from 'react'
import Stories from './Stories'
import './Style.css'
function Story() {
  const [selected,setSelected] = useState([])
  useEffect(()=>{
    const suggestion = [
      {
        id:1,
        name:'rawand jaradh',
        img:'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60'
      },
      {
        id:2,
        name:'rbuba hosam',
        img:'https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cGVyc29ufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60'
      },
      {
        id:3,
        name:'mohammmed ',
        img:'https://images.unsplash.com/photo-1554151228-14d9def656e4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8cGVyc29ufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60'
      },
      {
        id:4,
        name:'Sammer ',
        img:'https://images.unsplash.com/photo-1491349174775-aaafddd81942?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHBlcnNvbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60'
      },
      {
        id:5,
        name:'Lily',
        img:'https://images.unsplash.com/photo-1499952127939-9bbf5af6c51c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fHBlcnNvbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60'
      },
      {
        id:6,
        name:'Ghageer Sami',
        img:'https://images.unsplash.com/photo-1500048993953-d23a436266cf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fHBlcnNvbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60'
      },
      {
        id:7,
        name:'Nour Ahmed',
        img:'https://images.unsplash.com/photo-1593104547489-5cfb3839a3b5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjV8fHBlcnNvbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60'
      },
    ]
    setSelected(suggestion)
   
  },[])
  return (
    <div className="story-conatiner">
    {selected.map((profile)=>
    <div className="story">
    <img src={profile.img}/>
    <span>{profile.name}</span>
    </div>
    )}
    </div>
  )
}

export default Story