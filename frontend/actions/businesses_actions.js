import * as APIUtil from '../util/businesses_api_util';

export const RECEIVE_ALL_BUSINESSES = 'RECEIVE_ALL_BUSINESSES';
export const RECEIVE_BUSINESS = 'RECEIVE_BUSINESS';

export const fetchAllBusinesses = () => (dispatch) => {
    return APIUtil.fetchAllBusinesses().then((businesses) => {
        return dispatch(receiveAllBusinesses(businesses));
    })
}

export const fetchBusiness = (businessId) => (dispatch) => {
    debugger
    return APIUtil.fetchBusiness(businessId).then((business) => {
        debugger
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