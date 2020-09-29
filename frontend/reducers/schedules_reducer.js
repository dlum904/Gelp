import { RECEIVE_SCHEDULES } from '../actions/schedules_actions';

const schedulesReducer = (oldState = {}, action) => {
    Object.freeze(oldState);
    switch (action.type) {
        case RECEIVE_SCHEDULES:
            return action.schedules;
        default:
            return oldState;
    }
}


export default schedulesReducer;