import { createContext, StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import './index.css'
import App from './App.jsx'
import Blogger from './Blogger.jsx'
import Counter from './Counter.jsx';
import Invento from './Invento.jsx';
import { ProductProvider } from './context/ProductContext.jsx'; // Only import in curly braces when you DID NOT EXPORT as DEFAULT
import Meal from './Meal.jsx';

// import bootstrap css what was installed as a package
// import "bootstrap/dist/css/bootstrap.css"


// HOW TO USE CONTEXT API
// 1. Create the context by calling the function: createContext()
export const AppNameContext = createContext();  // Remember to import it at the top from React
// 2.  Create a Provider which is like a senior/high-level/super component, and it contains data|function that is to be accessed by the children component as value prop.
// 3.  Wrap a provider around all the children that want to inherit the data
// 4. Go inside children componet that needs the data and consume the context. We use hook: useContext(the_context_i_wanna_use)


const username = "gentlesammy";
createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    {/* <Blogger /> */}
    {/* <Counter /> */}

    {/* Using Context Api */}
    {/* Below is a Provider weapping our "root component i.e. Invento". Now this means that ANY and ALL components inside "Invento" will have access to the data we pass to it */}
    {/* Usually, you'll create a new file for "Context" i.e. it should be inside my "main component/file" */}
    {/* <ProductProvider>
      <AppNameContext.Provider value={{appname: "Invento App", theme: "dark"}}> 
        <Invento /> 
      </AppNameContext.Provider>
    </ProductProvider> */}

    <Meal />
  </StrictMode>,

  // What is rendered in react is called JSX (js + xml)
  // <>
  //   <h1>This is a heading. Welcome {username}</h1>
  //   <p>This is a paragraph. {2+4}</p>
  //   <p>Greetings from mars</p>
  // </>
)

