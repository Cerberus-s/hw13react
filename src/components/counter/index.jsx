import React  from "react";
import {useDispatch, useSelector} from "react-redux";

function CounterApp() {
    const stateCounter = useSelector(state => state.counterReducer.counter)
    
    const cashState = useSelector(state => state.cashReducer.cash)

    const dispatch = useDispatch()

    const handleDecrementCounter = () => {
        dispatch( {
            type: 'DECREMENT_COUNTER'
        })
    }

    const handleIncrementCounter = () => {
        dispatch( {
            type: 'INCREMENT_COUNTER'
        })
    }

    return (
        <div>
            <p>Redux</p>
            <button onClick={handleIncrementCounter}>+</button>
            {stateCounter}
            <button onClick={handleDecrementCounter}>-</button>
            balance {cashState}
        </div>
    );
}

export default CounterApp;