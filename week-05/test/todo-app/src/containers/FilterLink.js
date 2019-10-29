import { connect } from 'react-redux'
import { setVisibilityFilter } from '../actions'
import Link from '../components/Link' 

const mapStateToProps = (state, ownProps) => ({
    active: ownProps.filter === state.visibilityFilter
})

const mapDispatchToProps = (dispatch, ownProps) => ({
    /* Inject a prop called onClick into the FilterLink component,
    and we want onClick to dispatch a setVisibilityFilter action */
    onClick: () => dispatch(setVisibilityFilter(ownProps.filter))
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Link)