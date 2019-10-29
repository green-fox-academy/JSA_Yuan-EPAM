import { connect } from 'react-redux'
import { toggleTodo } from '../actions'
import TodoList from '../components/TodoList'
import { VisibilityFilters } from '../actions'

const getVisibleTodos = (todos, filter) => {
    switch (filter) {
        case VisibilityFilters.SHOW_ALL:
            return todos
        case VisibilityFilters.SHOW_DONE:
            return todos.filter(item => item.done)
        case VisibilityFilters.SHOW_ACTIVE:
            return todos.filter(item => !item.done)
        default:
            throw new Error('VisibleTodoList --> Unknown filter: ' + filter)
    }
}

const mapStateToProps = (state) => ({
    todos: getVisibleTodos(state.todos, state.visibilityFilter)
})

/* How does the id bound TodoList ????? */
const mapDispatchToProps = (dispatch) => ({
    toggleTodo: id => dispatch(toggleTodo(id))
})

export default connect (
    mapStateToProps,
    mapDispatchToProps
)(TodoList)
