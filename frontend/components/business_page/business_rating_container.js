import { connect } from 'react-redux';
import BusinessRating from './business_rating'
import { fetchAllReviews } from '../../actions/reviews_actions'

const mSTP = (state) => {
    const reviews = state.entities.reviews
    return {
        reviews
    }
}

const mDTP = (dispatch) => {
    return {
        fetchAllReviews: (businessId) => {
            return dispatch(fetchAllReviews(businessId));
        }
    }
}

export default connect(mSTP, mDTP)(BusinessRating);