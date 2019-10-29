/* Action Creators */

let nextToDoId = 0;
const VisibilityFilters = {
    SHOW_ALL: 'SHOW_ALL',
    SHOW_DONE: 'SHOW_DONE',
    SHOW_ACTIVE: 'SHOW_ACTIVE'
}

const addTodo = text => ({
    type: 'ADD_TODO',
    id: nextToDoId++,
    text
})

const setVisibilityFilter = filter => ({
    type: 'SET_VISIBILITY_FILTER',
    filter
})


const toggleTodo = id => ({
    type: 'TOGGLE_TODO',
    id
})

export {VisibilityFilters, addTodo, setVisibilityFilter, toggleTodo}