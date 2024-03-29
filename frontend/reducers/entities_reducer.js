import { combineReducers } from 'redux';
import usersReducer from './users_reducer'
import businessesReducer from './businesses_reducer'
import schedulesReducer from './schedules_reducer'
import reviewsReducer from './reviews_reducer'

const entitiesReducer = combineReducers({
    users: usersReducer,
    businesses: businessesReducer,
    schedules: schedulesReducer,
    reviews: reviewsReducer

});

export default entitiesReducer;