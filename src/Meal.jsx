import React from 'react'
import Nav from './meal_components/Nav'
import Hero from './meal_components/Hero'
import Category from './meal_components/Category'
import Footer from './meal_components/Footer'
import "./assets/meal.css"
import { useState,useEffect } from 'react'


const Meal = () => {

  // send request to API and get data from it
  // We need 3 states (useState) to do this:
  //  - state 1 contains (i.e. store) the data that is being retrieved
  //  - state 2 to track if there's an error with the SERVER
  //  - state 3 to track if the app is loading or not i.e. a loader such as bootstrap's spinner

  const [categories, setCategories] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);

  // a function to contain the fetch api
  function fetch_meal(){
    fetch("https://www.themealdb.com/api/json/v1/1/categories.php")
    .then(function(res){return res.json()})
    .then(function(data){
        // if data comes back, then update our state
        setCategories(data.categories);
        setError(false); // no error
        setLoading(false);
    })
    .catch(function(err){
        // in the event of error
        setCategories([]);
        setError(true); // An error occurred
        setLoading(false);
    })
  }

  // to communicate wih external system, we use useEffect hook
  useEffect(function(){ 
      fetch_meal()  // this function CANNOT BE CALLED ordinarily. Rather, it must be called inside "useEffect()" hook. WHY??
  }, [])            // The Reason:


  return (
    <div>
      <Nav />
      <Hero />
      <Category loading={loading} error={error} categories={categories} />
      <Footer />
    </div>
  )
}

export default Meal