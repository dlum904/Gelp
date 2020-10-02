import { connect } from 'react-redux';
import ReviewsIndex from './reviews_index'
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

export default connect(mSTP, mDTP)(ReviewsIndex);