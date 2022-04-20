import {Route, Router, Switch} from "react-router-dom"
import React, {useState, useEffect} from "react"

import Navbar from "./components/Navbar"
import './App.css';
import BlogPostList from "./components/BlogPostList"
import LandingPage from "./components/LandingPage";
import ComingSoon from "./components/ComingSoon"
function App() {
  
// useEffect(() => {
//   fetch("http://localhost:4000/restaurants")
//   .then(res => res.json())
//   .then(reviewsArr => setReviews(reviewsArr))
// },[])

  return (
    <div className="App">
      <Navbar></Navbar>
      <ComingSoon></ComingSoon>
    </div>
  );

}  

export default App;

