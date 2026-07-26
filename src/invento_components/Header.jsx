import { useContext } from "react"  // step 1: import useContext from React
import { ProductContext } from "../context/ProductContext" // step 2: import Context that I want to consume

const Header = () => {

  const {products} =  useContext(ProductContext)  // from  inside product context

  return (
    <div className="row header">
      <div className="col text-center">
        <h1 className="mb-3">Product Inventory</h1>
        <button type="button" className="btn btn-primary">
          Count <span className="badge mine">{products.length}</span>
        </button>
      </div>
    </div>
  )
}

export default Header