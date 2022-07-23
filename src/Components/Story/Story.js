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
        img:''
      },
      {
        id:2,
        name:'rbuba hosam',
        img:''
      },
      {
        id:3,
        name:'mohammmed ahmed',
        img:''
      },
      {
        id:4,
        name:'Sammer Nourdeen',
        img:''
      },
      {
        id:5,
        name:'Lily Mohammed',
        img:''
      },
      {
        id:6,
        name:'Ghageer Sami',
        img:''
      },
      {
        id:7,
        name:'Nour Ahmed',
        img:''
      },
    ]
    setSelected(suggestion)
  })
  return (
    <div className="story-conatiner">
    {selected.map((profile)=>
    <Stories />
    )}
    </div>
  )
}

export default Story