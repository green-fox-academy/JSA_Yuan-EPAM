import React from 'react'
import { registerForm } from '../actions/index'
import { connect } from 'react-redux'

const RegistrationForm = ({ dispatch }) => {
    let input = {
        firstName: '',
        lastName: '',
        email: ''
    }

    return (
        <div>
            <form
                onSubmit={e => {
                    e.preventDefault()
                    dispatch(registerForm(input))
                    // input.value = ''
                }}>
                <input
                    placeholder="First Name"
                    ref={node => (
                        input['firstName'] = node
                    )}
                />
                <input
                    placeholder="Last Name"
                    ref={node => (
                        input['lastName'] = node
                    )}
                />
                <input
                    placeholder="Email Address"
                    ref={node => (
                        input['email'] = node
                    )}
                />
                <button type="submit">Register</button>
            </form>
        </div>
    )
}

export default connect()(RegistrationForm)