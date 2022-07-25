import React from 'react';
import './App.css';
import Header from './Components/Header/Header';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './Pages/Home/Home'
import Post from './Pages/Post/Post'
import Login from './Components/Auth/Login/login'
import Register from './Components/Auth/Register/Register'
function App() {
  return (
    <div className="App">
  
    <Router>
    <Header />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/login" element={<Login />}/>
        <Route path="/register" element={<Register />}/>
      </Routes>
      {/* <Post /> */}
    </Router>
    </div>
  );
}

export default App;
