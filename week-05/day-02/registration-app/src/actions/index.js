const initForm = {
    firstName: '',
    lastName: '',
    email: ''
}

const registerForm = text => ({
    type: 'REGISTER_FORM',
    text
})

export {initForm, registerForm}