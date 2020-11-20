import { connect } from 'react-redux';
import { createReview } from '../../actions/reviews_actions'

import ReviewForm from './review_form'

const mSTP = (state, ownProps) => {
    const currentUser = state.entities.users[state.session.id];
    return {
        currentUser
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