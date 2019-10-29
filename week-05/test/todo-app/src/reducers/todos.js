console.log('importing reducer from todos.js')

const todos = (state = [], action) => {
    switch (action.type) {
        case 'ADD_TODO':
            /* The new `todos` is equal to the old `todos`,
            concatenated with a single new item at the end*/
            return [
                ...state,
                {
                    id: action.id,
                    text: action.text,
                    done: false

                }
            ]
        case 'TOGGLE_TODO':
            console.log('state...')
            console.log(state)
            console.log('action...')
            console.log(action)
            let count = 0
            return state.map(todo => 
                {
                    count += 1
                    console.log(`toggleing... ${count}`)
                    if (todo.id === action.id) {
                        return {...todo, done: !todo.done}
                    } else {
                        return todo
                    }
                }
                // todo.id === action.id ? { ...todo, done: !todo.done } : todo
            )
        default:
            return state
    }
}

export default todos