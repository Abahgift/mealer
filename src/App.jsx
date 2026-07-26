// Importing a css file
import "./css/mystyle.css"

import  Header from "./components/Header";
import  Hero from "./components/Hero";
import  Main from "./components/Main";
import  Footer from "./components/Footer";

function App() { // this is the PARENT COMPONENT
  // sometimes this root component get a piece of data from another backend applicaion i.e. API
  const pageVisit = 20 // pretend this came back from another application
  // Meaning of prop -- Check your note
  // How do parent send props to child component? (see below)
  // How do children pick props from parent component? (see Header and Main components, both inside the "components folder")

  // Lets assume we sent a request to a backend that fetch list of categories from database and we want to display it in hero section
  const categories = ["Soup", "Stew", "Snacks", "Swallow"] // we got this from a backend

  // Let's assume we sent a request to a backend and what came out is an arary of objects.
  const products = [
    {
      id: 1,
      name: "Tomato Ketchup",
      price: 4000,
      image: "hero.png"
    },
    {
      id: 2,
      name: "Apple Ketchup",
      price: 10000,
      image: "hero.png"
    },
    {
      id: 3,
      name: "Lemon Ketchup",
      price: 2000,
      image: "hero.png"
    }
  ]

  return(
    <div className="row">
      <Header noOfVisits = {pageVisit} />
      <Hero cats = {categories} />
      <Main visits = {pageVisit} products={products} />
      <Footer />
    </div>
  )
}

export default App;