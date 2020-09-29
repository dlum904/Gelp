import { combineReducers } from 'redux';
import usersReducer from './users_reducer'
import businessesReducer from './businesses_reducer'
import schedulesReducer from './schedules_reducer'
const entitiesReducer = combineReducers({
    users: usersReducer,
    businesses: businessesReducer,
    schedules: schedulesReducer

});

export default entitiesReducer;