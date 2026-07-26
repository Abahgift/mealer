import "./assets/app.css"
import Header from "./invento_components/Header"
import Form from "./invento_components/Form"
import Content from "./invento_components/Content"
import Footer from "./invento_components/Footer"
import { useState } from "react"

const Invento = () => {

    // const [products, setProducts] = useState([  // send a requsest to a backend that will fetch products for the user from the Database and then set it as the default for our products
    //     {
    //         id: 1,
    //         name: "Black Marker",
    //         qty: 10
    //     },
    //     {
    //         id: 2,
    //         name: "Display Material",
    //         qty: 20
    //     },
    //     {
    //         id: 3,
    //         name: "Flower Pots",
    //         qty: 5
    //     }
    // ]);   

  return (
    <div className="container">
      <Header />
      <Form />
      <Content/>
      <Footer />
    </div>
  )
}

export default Invento