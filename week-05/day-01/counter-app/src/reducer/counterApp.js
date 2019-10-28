import {
    initState,
} from "../action/counterAction"

const counterApp = (state=initState, action) => {
    console.log(action)
    switch (action.type) {
        case "SET": 
            return {
                ...state,
                counter: action.amount
            }
        case "INCREASE":
            return {
                ...state,
                counter: action.amount ? (state.counter + action.amount) : (state.counter + 1)
            }
        case "DESCREASE":
            return {
                ...state,
                counter: action.amount ? (state.counter - action.amount) : (state.counter - 1)
            }
        case "RESET":
            return {
                ...state,
                counter: 0
            }
        default:
            return state
    }
}

export default counterApp