import { RECEIVE_BUSINESS, RECEIVE_ALL_BUSINESSES } from '../actions/businesses_actions';



const businessesReducer = (oldState = {}, action) => {
    Object.freeze(oldState);
    let newState = Object.assign({}, oldState);
    switch (action.type) {
        case RECEIVE_ALL_BUSINESSES:
            return action.businesses;
        case RECEIVE_BUSINESS:
            newState[action.business.id] = action.business;
            return newState;
        default:
            return oldState;
    }
}

export default businessesReducer;