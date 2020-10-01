

export const fetchAllReviews = (businessId) => {
    return $.ajax({
        method: "GET",
        url: `api/businesses/${businessId}/reviews`
    })
}

export const fetchReview = (businessId, reviewId) => {
    return $.ajax({
        method: "GET",
        url: `api/businesses/${businessId}/reviews/${reviewId}`
    })
}

export const createReview = ( review, businessId) => {
    return $.ajax({
        method: "POST",
        url: `api/businesses/${businessId}/reviews`,
        data: { review }
    })
}