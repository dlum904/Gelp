import { connect } from 'react-redux';
import Business from './business'
import { fetchBusiness } from '../../actions/businesses_actions'

const mSTP = (state, ownProps) => {
    const business = state.entities.businesses[ownProps.match.params.id]
    return {
        business
    }
}

const mDTP = (dispatch) => {
    return {
        fetchBusiness: (businessId) => {
            return dispatch(fetchBusiness(businessId))
        }
    }
}

export default connect(mSTP, mDTP)(Business);