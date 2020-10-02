import { connect } from 'react-redux';
import { createReview } from '../../actions/reviews_actions'

import ReviewForm from './review_form'

const mSTP = (state, ownProps) => {
    const business = state.entities.businesses[(ownProps.match.params.businessId)]
    return {
        business
    }
}

const mDTP = (dispatch) => {
    return {
        createReview: (review, businessId) => {
            return dispatch(createReview(review, businessId))
        }
    }
}

export default connect(mSTP, mDTP)(ReviewForm)