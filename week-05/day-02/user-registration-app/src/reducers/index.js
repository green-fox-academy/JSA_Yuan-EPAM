import { combineReducers } from 'redux'
import userSubmission from './userSubmission'
import buttonDisplay from './buttonDisplay'

export default combineReducers({
    userSubmission,
    buttonDisplay
})