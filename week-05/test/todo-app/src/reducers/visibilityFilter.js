import { VisibilityFilters } from '../actions'
import { combineReducers } from 'redux'

const visibilityFilter = (state = VisibilityFilters.SHOW_ALL, action) => {
    switch (action.type) {
        case 'SET_VISIBILITY_FILTER':
            return action.filter  
        default:
            return state
    }
}

console.log('importing from visibilityFilter.js')

export default visibilityFilter