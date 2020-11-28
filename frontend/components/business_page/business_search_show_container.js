import { connect } from 'react-redux';
import BusinessSearchShow from './business_search_show'
import { fetchBusiness } from '../../actions/businesses_actions'
import { fetchAllReviews } from '../../actions/reviews_actions'

const mSTP = (state, ownProps) => {
    const business = state.entities.businesses[(ownProps.business.id)];
    const reviews = state.entities.reviews;
    return {
        business,
        reviews
    }
}

const mDTP = (dispatch) => {
    return {
        fetchBusiness: (businessId) => {
            return dispatch(fetchBusiness(businessId));
        },
        fetchAllReviews: (businessId) => {
            return dispatch(fetchAllReviews(businessId));
        }
    }
}

export default connect(mSTP, mDTP)(BusinessSearchShow);