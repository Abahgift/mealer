import Form from './counter_components/Form'
import Header from './counter_components/Header'
import {useState} from 'react'  // we want to manage a state on this component so we import useState


const Counter = () => {
  // Assume we send a request to an API and it fetches the balance from a DB and returns it back to us.

  // const balance = 5000; // if you have anything that can change in your application, DO NOT STORE IT IN A VARIABLE|CONSTANT. This is where React States come in.
  // Hence, balance should be kept inside "STATES"

  const[balance, setBalance] = useState(0);  // Assume the initial value (i.e. 0) is coming from the Database initially

  return (
    <div className='container'>
        {/* conditional rendering using ternary operator */}
        {
          balance > 5000 ? 
          <p className="alert alert-success">Odogwu, you are doing well</p>
          :
          <p className="alert alert-warning">Oga work harder, you are going broke</p>
        }
        <Header balance={balance} />
        <Form balance={balance} setBalance={setBalance} />
    </div>
  )
}

export default Counter