import { connect } from 'react-redux'
import Header from './../components/header/Header'

const mapStateToProps = state => {
    const { menu } = state.getsBySubreddit || []
    return {
        menu
    }
}

export default connect(
    mapStateToProps,
    null,
    null,
    { forwardRef: true }
)(Header)
