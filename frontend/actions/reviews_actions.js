import * as APIUtil from '../util/reviews_api_util';

export const RECEIVE_ALL_REVIEWS = 'RECEIVE_ALL_REVIEWS';
export const RECEIVE_REVIEW = 'RECEIVE_REVIEW';
export const CREATE_REVIEW = 'CREATE_REVIEW';

export const fetchAllReviews = (businessId) => (dispatch) => {
    return APIUtil.fetchAllReviews(businessId).then((reviews) => {
        return dispatch(receiveAllReviews(reviews));
    })
}

export const fetchReview = (businessId, reviewId) => (dispatch) => {
    return APIUtil.fetchReview(businessId, reviewId).then((review) => {
        return dispatch(receiveReview(review));
    })
}

export const createReview = (review, businessId) => (dispatch) => {
    return APIUtil.createReview(review, businessId).then((review) => {
        return dispatch(receiveReview(review))
    })
}

export const receiveAllReviews = (reviews) => {
    return {
        type: RECEIVE_ALL_REVIEWS,
        reviews
    }
}

export const receiveReview = (review) => {
    return {
        type: RECEIVE_REVIEW,
        review
    }
}