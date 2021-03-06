import * as APIUtil from '../util/businesses_api_util';

export const RECEIVE_ALL_BUSINESSES = 'RECEIVE_ALL_BUSINESSES';
export const RECEIVE_BUSINESS = 'RECEIVE_BUSINESS';


export const fetchAllBusinesses = (category) => (dispatch) => {
    return APIUtil.fetchAllBusinesses(category).then((businesses) => {
        return dispatch(receiveAllBusinesses(businesses));
    })
}

export const fetchBusiness = (businessId) => (dispatch) => {
    return APIUtil.fetchBusiness(businessId).then((business) => {
        return dispatch(receiveBusiness(business));
    })
}


export const receiveAllBusinesses = (businesses) => {
    return {
        type: RECEIVE_ALL_BUSINESSES,
        businesses
    }
}

export const receiveBusiness = (business) => {
    return {
        type: RECEIVE_BUSINESS,
        business
    }
}


