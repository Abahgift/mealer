import { createContext, useContext, useState } from "react";

const VibeProductContext = createContext();

const initialProducts = [   // Note, this is NOT supposed to be hardcoded ooo. We are supposed to reach out to an API for this data
  {
    id: 1,
    name: "Black Marker",
    qty: 10,
  },
  {
    id: 2,
    name: "Display Material",
    qty: 20,
  },
  {
    id: 3,
    name: "Flower Pots",
    qty: 5,
  },
];

export const VibeProductProvider = ({ children }) => {
  const [products, setProducts] = useState(initialProducts);

  const addProduct = (product) => {
    const newProduct = {
      id: Date.now(),
      ...product,
    };

    setProducts((prevProducts) => [...prevProducts, newProduct]);
  };

  const deleteProduct = (id) => {
    setProducts((prevProducts) =>
      prevProducts.filter((product) => product.id !== id)
    );
  };

  const fetchAllProducts = () => products;

  return (
    <VibeProductContext.Provider
      value={{ products, addProduct, deleteProduct, fetchAllProducts }}
    >
      {children}
    </VibeProductContext.Provider>
  );
};

export const useVibeProduct = () => useContext(VibeProductContext);

export default VibeProductContext;
