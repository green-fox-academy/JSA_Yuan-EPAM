import React from 'react'
// import PropTypes from 'prop-types'
import Todo from './Todo'

const TodoList = ({ todos, toggleTodo }) => (
    <ul>
        {todos.map(item => (
            <Todo key={item.id} onClick={() => toggleTodo(item.id)} {...item}></Todo>
        ))}
    </ul>
)

export default TodoList