import { connect } from 'react-redux';
import { createReview } from '../../actions/reviews_actions'

import ReviewForm from './review_form'

const mSTP = (state, ownProps) => {
    business = state.entities.businesses[(ownProps.match.params.businessId)]
    return {
        business
    }
}

const mDTP = (dispatch) => {
    return {
        createReview: (review) => {
            return dispatch(createReview(review))
        }
    }
}

connect(mSTP, mDTP)(ReviewForm)