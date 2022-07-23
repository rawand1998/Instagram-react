import React from 'react'
import PostList from '../../Components/PostList/PostList'
import Story from '../../Components/Story/Story'
import ContactStuff from '../../Components/ContactStuff/ContactStuff'
import './Style.css'
function Home() {
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