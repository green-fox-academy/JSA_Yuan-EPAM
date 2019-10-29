import { initForm } from '../actions/index'

const form = (state = initForm, action) => {
    switch (action.type) {
        case 'REGISTER_FORM':
            return ({
                ...state,
                firstName: action.text['firstName'].value,
                lastName: action.text['lastName'].value,
                email: action.text['email'].value
            })
        default:
            return state
    }
}

export default form