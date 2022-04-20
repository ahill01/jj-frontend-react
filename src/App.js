import {BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams} from "react-router-dom"
import React, {useState, useEffect} from "react"

import Navbar from "./components/Navbar"
import './App.css';
import BlogPostList from "./components/BlogPostList"
import LandingPage from "./components/LandingPage";
import PlaylistContainer from "./components/PlaylistContainer"
import SubmissionPage from "./components/SubmissionPage";
import FaqPage from "./components/FaqPage";

function App() {
  
// useEffect(() => {
//   fetch("http://localhost:4000/restaurants")
//   .then(res => res.json())
//   .then(reviewsArr => setReviews(reviewsArr))
// },[])

  return (
  <div className="App">
  <Router>
    <Switch>
      <Route exact path="/">
        <Navbar/>  
        <LandingPage/>
      </Route>
      <Route exact path="/blog">
        <Navbar/>  
        <BlogPostList/>
      </Route>
        <Route exact path="/playlists">
          <Navbar/>
          <PlaylistContainer/>
        </Route>
        <Route exact path="/submissionPage">
          <Navbar/>
          <SubmissionPage/>
        </Route>
        <Route exact path="/faq">
          <Navbar/>
          <FaqPage/>
        </Route>
      </Switch>
    </Router>
  </div>
  );

}  

export default App;

