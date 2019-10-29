const buttonVisibility = (state=false, action) => {
    switch (action.type) {
        case "SET_BUTTON_STATUS":
            return action.disable
        default:
            return state
    }
}

export default buttonVisibility