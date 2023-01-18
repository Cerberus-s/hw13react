export const ADD_CASH = 'ADD_CASH'
export const GET_CASH = 'GET_CASH'
export const CLEAR_CASH = 'CLEAR_CASH'

export const addCashAction = (payload) => ({
    type: ADD_CASH,
    payload: payload
})

export const getCashAction = (payload) => ({
    type: GET_CASH,
    payload: payload
})

export const clearCashAction = (payload) => ({
    type: CLEAR_CASH,
    payload: payload
})