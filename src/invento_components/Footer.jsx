// We want footer to consume what is inside our "AppNameContext" which is the name of our context in "main comp/file"
// To use it, we usually use the "useContext" hook.
// NOTE: Hooks can ONLY be used inside FUNCTIONAL COMPONENTS and AT THE TOP TOO

import { useContext } from "react";
import { AppNameContext } from "../main";

const Footer = () => {
  const {appname} = useContext(AppNameContext)  // To access what is inside AppNameContext


  return (
    <div className="row footer pt-5 pb-2">
      <div className="col text-center">
        <h5>Copyright &copy; {appname} 2025</h5>
      </div>
    </div>
  )
}

export default Footer