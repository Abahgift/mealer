import { useState } from "react";

const Form = ({balance, setBalance}) => {
    // a state to manage "form input"
    const[amount, setAmount]  = useState("")

    // --------------------------------------------

    function handle_withdraw(){
        // balance = balance - 1000; // don't do this: props are immutable. A child component should not update props

        // if (balance == 0){
        //     alert("Oga, insufficient balance")
        //     return;
        // }

        if(amount > balance){
            alert("Oga, insufficient balance")
            setAmount(""); 
            return;
        }

        setBalance(balance - Number(amount));
        alert(`You withdrew. New balance is ${balance-Number(amount)}`);
        setAmount("");  // clear amount after withdraw is complete")
        return;
    }

    return (
        <div>
            <div className="row py-5">
                <div className="col-md-2 offset-md-1 py-2">
                    <button className="btn btn-warning" onClick={handle_withdraw}>Withdraw</button>
                </div>

                <div className="col-md-5 py-2">
                    {/* this input will handle amount: amount to withdraw or amount to deposit */}
                    <input type="number" className="form-control py-3" value={amount} onChange={
                        function(e){ // Nameless function
                            // console.log(e) // means "retrieve whatever key the user typed". "e" means "events object"
                            setAmount(e.target.value) // this will update the state
                        }
                    } />
                </div>

                <div className="col-md-2 py-2">
                    <button className="btn btn-primary" onClick={
                        function(){ // Nameless function
                            // balance = balance + 1000;
                            // setBalance(balance + 1000)
                            setBalance(balance + Number(amount)) // this will update the state
                            alert(`You deposited ${amount} and your balance is now ${balance+Number(amount)}`)
                            setAmount('')  // clear the input field after submitt')
                        }
                    } >Deposit</button>
                </div>
            </div>
        </div>
    )
}
export default Form;
