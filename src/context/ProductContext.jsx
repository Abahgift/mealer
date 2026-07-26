import { createContext, useContext, useState } from "react";

//step 1: Create the context
export const ProductContext = createContext();

// step 2: Create a Provider: a super-components that have other components nested inside it
export const ProductProvider = ({children}) => {

    // All the functionally that has to do with Product is then added here. It's usually CRUD i.e. Creating, Reading, Updating, and Deleting

    const [products, setProducts] = useState([  // send a requsest to a backend that will fetch products for the user from the Database and then set it as the default for our products
            {
                id: 1,
                name: "Black Marker",
                qty: 10
            },
            {
                id: 2,
                name: "Display Material",
                qty: 20
            },
            {
                id: 3,
                name: "Flower Pots",
                qty: 5
            }
        ]); 

        // a function that accept a new product detail and insert it into products array
        // create a method that accept product id and delete the product with that id from inside the product state
        // a function that accept product id and details and update the product with the id in the product state


    return (
        <ProductContext.Provider value={{products, setProducts}} >
            {children}
        </ProductContext.Provider>
    )
}


// export {ProductContext, ProductProvider}