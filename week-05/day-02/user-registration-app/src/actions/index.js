const initState = {
    userName: '',
    emailAddress: '',
    password: ''
}

const submit = text => ({
    type: "SUBMIT",
    text
})

const setButtonStatus = disable => ({
    type: "SET_BUTTON_STATUS",
    disable
})

export { initState, submit, setButtonStatus}