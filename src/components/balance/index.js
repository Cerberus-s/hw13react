import React from 'react';
import {useDispatch, useSelector} from "react-redux";
// import {ADD_CASH, GET_CASH} from "../../redux/cash/reducer";
import {addCashAction, getCashAction, clearCashAction} from "../../redux/cash/action";

const Balance = () => {
    const cashState = useSelector(state => state.cashReducer.cash)
    
    const dispatch = useDispatch()

    const getCash = (amount) => {
        dispatch(addCashAction(amount))
    }

    const addCash = (amount) => {
        dispatch(getCashAction(amount))
    }

    const clearCash = () => {
        dispatch(clearCashAction())
    }

    return (
        <div>
            balance -{cashState}
            <button onClick={() => addCash(Number(prompt()))}>пополнить</button>
            <button onClick={() => getCash(Number(prompt()))}>снять</button>
            <button onClick={() => clearCash()}>clear</button>
        </div>
    );
};

export default Balance;
