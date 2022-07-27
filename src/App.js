import React from 'react';
import './App.css';
import Header from './Components/Header/Header';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './Pages/Home/Home'
import Post from './Pages/Post/Post'
import Login from './Components/Auth/Login/login'
import Register from './Components/Auth/Register/Register'
import Profile from './Components/profile/Profile'
import SinglePost from './Components/SinglePost/SinglePost'
function App() {
  return (
    <div className="App">
  
    <Router>
   
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/login" element={<Login />}/>
        <Route path="/register" element={<Register />}/>
        <Route path="/profile/:id" element={<Profile />}/>
        <Route path="/single/:id" element={<SinglePost />}/>
      </Routes>
      {/* <Post /> */}
    </Router>
    </div>
  );
}

export default App;
