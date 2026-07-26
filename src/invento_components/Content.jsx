import { useContext } from "react"  // step 1: import useContext from React
import { ProductContext } from "../context/ProductContext" // step 2: import Context that I want to consume

const Content = () => {
  const {products, setProducts} = useContext(ProductContext)


  const handleDelete = (id) => {
    setProducts(products.filter((product) => product.id !== id))
  }

  return (
    <div className="row products text-center">
      <div className="col-md-6 offset-md-3">
        <h3>Products Inventory</h3>
      </div>
      <div className="col-md-8 offset-md-2 bg-white">
        <table className="table">
          <thead>
            <tr>
              <th>S/N</th>
              <th>Product Name</th>
              <th>Quantity</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product, index) => (
              <tr key={product.id || index}>
                <td>{index + 1}</td>
                <td>{product.name}</td>
                <td>{product.qty}</td>
                <td>
                  <button
                    className="btn btn-danger btn-sm"
                    type="button"
                    onClick={() => handleDelete(product.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Content