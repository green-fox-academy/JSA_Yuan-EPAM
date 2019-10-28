import { connect } from 'react-redux'
import { descreaseCounter } from '../action/counterAction'
import Descreaser from '../components/Descreaser'

const mapStateToProps = state => ({
    number: state.counter
})

const mapDispatchToProps = dispatch => ({
    onClick: () => dispatch(descreaseCounter())
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Descreaser)