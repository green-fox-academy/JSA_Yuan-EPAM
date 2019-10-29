import { combineReducers } from 'redux'
import todos from './todos'
import visibilityFilter from './visibilityFilter'

console.log('importing reducer... from index.js')

export default combineReducers({
    todos,
    visibilityFilter
})