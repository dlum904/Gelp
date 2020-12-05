import { RECEIVE_SESSION_ERRORS, RECEIVE_CURRENT_USER, CLEAR_SESSION_ERRORS } from '../actions/session_actions';

const sessionErrorsReducer = (oldState = [], action) => {
    Object.freeze(oldState);
    let newState = oldState.concat([]);
    switch(action.type) {
        case RECEIVE_SESSION_ERRORS:
            return newState.concat(action.errors);
        case RECEIVE_CURRENT_USER:
            return [];
        case CLEAR_SESSION_ERRORS:
            return [];
        default:
            return oldState;
    }
};

export default sessionErrorsReducer;