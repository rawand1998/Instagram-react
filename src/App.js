import React from 'react';
import './App.css';
import Header from './Components/Header/Header';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './Pages/Home/Home'
import Post from './Pages/Post/Post'
function App() {
  return (
    <div className="App">
    <Header />
    <Router>
      <Routes>
        <Route path="/" element={<Home />}/>
        
      </Routes>
      <Post />
    </Router>
    </div>
  );
}

export default App;
