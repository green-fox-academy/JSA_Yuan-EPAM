import { connect } from 'react-redux'
import SubmissionInfo from '../components/SubmissionInfo'


const checkeState = (state) => {
    console.log('checkState')
    console.log(state)
    console.log(state.firstName)
    console.log(state.lastName)
    console.log(state.email)
}

const mapStateToProps = state => ({
    firstName: state.firstName,
    lastName: state.lastName,
    email: state.email
})

export default connect(
    mapStateToProps
    // checkeState
)(SubmissionInfo)