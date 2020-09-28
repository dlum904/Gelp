import { connect } from 'react-redux';
import Business from './business'
import { fetchBusiness } from '../../actions/businesses_actions'

const mSTP = (state, ownProps) => {
    const business = state.entities.businesses[parseInt(ownProps.match.params.businessId)]
    return {
        business
    }
}

const mDTP = (dispatch) => {
    return {
        fetchBusiness: (businessId) => {
            return dispatch(fetchBusiness(businessId))
        },
        fetchAllBusinesses: () => {
            return dispatch(fetchAllBusinesses())
        }
    }
}

export default connect(mSTP, mDTP)(Business);