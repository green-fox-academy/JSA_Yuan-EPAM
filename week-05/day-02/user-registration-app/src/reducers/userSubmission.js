import { initState } from '../actions/index'

const userSubmission = (state=initState, action) => {
    switch (action.type) {
        case "SUBMIT":
            // check illegalibilty of each user input
            console.log('Reducer submission')
            console.log(action)
            return
        default:
            return state
    }
}

export default userSubmission