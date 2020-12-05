import { connect } from 'react-redux';
import Splash from './splash'
import { fetchBusiness } from '../../actions/businesses_actions'

const mSTP = (state) => {
    const businesses = state.entities.businesses
    return {
        businesses
    }
}

const mDTP = (dispatch) => {
    return {
        fetchBusiness: (businessId) => {
            return dispatch(fetchBusiness(businessId));
        }
    }
}

export default connect(mSTP, mDTP)(Splash);