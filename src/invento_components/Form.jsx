import { useState } from "react"
import { useContext } from "react"  // step 1: import useContext from React
import { ProductContext } from "../context/ProductContext" // step 2: import Context that I want to consume

const Form = () => {
//   const [formData, setFormData] = useState({ name: "", qty: "" }) // What my lecturer AI gave him

  const {products, setProducts} = useContext(ProductContext)  // Curly Braces: How you fetch from an Object

  const [inputs, setInputs] = useState({ name: "", qty: "" }) // Square Bracket: How you fetch from an Array. This is called "Destructuring"

  const handleChange = (e) => {
    const { name, value } = e.target
    setInputs((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    if (!inputs.name.trim() || !inputs.qty) {
      return
    }

    const newProduct = {
      id: `${Date.now()}-${Math.random().toString(36).slice(2, 8)}`, // This won't be necessary if we are using a database
      name: inputs.name.trim(),
      qty: Number(inputs.qty),
    }

    // Under normal circumstances, if I am dealing with an API here, this is where I get to...
    // send an Ajax request to the API and save it there,
    setProducts([...products, newProduct])
    setInputs({ name: "", qty: "" })
  }

  return (
    <div className="row text-center formy">
      <div className="col-md-6 offset-md-3">
        <h3>Add Product</h3>
      </div>
      <div className="col-md-8 offset-md-2">
        <form className="py-3 px-5 brr" onSubmit={handleSubmit}>
          <div className="row my-4">
            <div className="col-md-7">
              <input
                type="text"
                name="name"
                value={inputs.name}
                onChange={handleChange}
                className="form-control"
                placeholder="product name"
              />
            </div>
            <div className="col-md-3">
              <input
                type="number"
                name="qty"
                value={inputs.qty}
                onChange={handleChange}
                className="form-control"
                placeholder=" Qty"
              />
            </div>
            <div className="col-md-2 text-end">
              <input type="submit" value="Add Product" className="btn btn-primary mine" />
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Form