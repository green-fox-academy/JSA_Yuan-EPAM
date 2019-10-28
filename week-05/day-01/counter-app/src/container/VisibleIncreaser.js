import { connect } from 'react-redux'
import { increaseCounter } from '../action/counterAction'
import Increaser from '../components/Increaser'

// const showIncreaser = (increaser, ownProps) => {
//     console.log("in showIncreaser")
//     console.log(increaser)
//     console.log(ownProps)
// }

/* TODO: How to detect the action of redux, like the type of action?
        Otherwise htere are too many redundant codes */

const mapStateToProps = (state, ownProps) => ({
    // test: showIncreaser(state, ownProps),
    number: state.counter
})

const mapDispatchToProps = dispatch => ({
    onClick: () => dispatch(increaseCounter())
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Increaser)