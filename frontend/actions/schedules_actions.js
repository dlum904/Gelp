import * as APIUtil from '../util/schedule_api_util'
export const RECEIVE_SCHEDULES = 'RECEIVE_SCHEDULES';

export const receiveSchedules = (schedules) => {
    return {
        type: RECEIVE_SCHEDULES,
        schedules
    }
}

export const fetchSchedules = (businessId) => (dispatch) => {
    return APIUtil.fetchSchedules(businessId).then((schedules) => {
        return dispatch(receiveSchedules(schedules));
    })
}