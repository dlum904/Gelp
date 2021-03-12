import { RECEIVE_REVIEW, RECEIVE_ALL_REVIEWS, CREATE_REVIEW } from '../actions/reviews_actions';

const reviewsReducer = (oldState = {}, action) => {
    Object.freeze(oldState);
    let newState = Object.assign({}, oldState);
    switch (action.type) {
        case RECEIVE_ALL_REVIEWS:
            return action.reviews;
        case RECEIVE_REVIEW:
            newState[action.review.id] = action.review;
            return newState;
        default:
            return oldState;
    }
}

export default reviewsReducer;