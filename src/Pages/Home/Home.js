import React from 'react'
import Posts from '../../Components/Posts/Posts'
import Story from '../../Components/Story/Story'
import ContactStuff from '../../Components/ContactStuff/ContactStuff'
import './Style.css'
function Home() {
  return (
    <div className="home-container">
        <div className="section">
            <Story />
            <Posts />
        </div>
        <div className="sect">
            <ContactStuff />
        </div>
    </div>
  )
}

export default Home