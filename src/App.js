import {Route, Switch} from "react-router-dom"
import Navbar from "./components/Navbar"
import ReviewsList from "./components/ReviewsList"
import './App.css';
import React, {useState, useEffect} from "react"
import Filterbar from "./components/Filterbar";
import Review from "./components/Review";
import NewReviewForm from "./components/NewReviewForm";
import LandingPage from "./components/LandingPage";

function App() {
  
useEffect(() => {
  fetch("http://localhost:4000/restaurants")
  .then(res => res.json())
  .then(reviewsArr => setReviews(reviewsArr))
},[])

  return (
    <div className="App">
    
    <Switch>
    
    <Route exact path="/">
      <Navbar/>  
      <LandingPage />
        </Route>
        <Route exact path="/reviews">
        <Navbar/>
        <Filterbar setFilterData={setFilterData} filterData={filterData} attireOptions ={attireOptions} dietOptions={dietOptions}/>
        <ReviewsList reviews={(filteredList===undefined || noFilter()) ? reviews : filteredList} />
        </Route>
        <Route exact path="/new">
        <Navbar/>
          <NewReviewForm />
        </Route>
        <Route exact path="/reviews/:id">
        <Navbar/>
          <Review />
        </Route>
      </Switch>

   
    </div>
  );
}  

export default App;

