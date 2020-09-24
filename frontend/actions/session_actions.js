import * as APIUtil from '../util/session_api_util';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER';
export const RECEIVE_SESSION_ERRORS = 'RECEIVE_SESSION_ERRORS';

export const login = (user) => (dispatch) => {
    return APIUtil.login(user).then((user) => {
        console.log(user);
        return dispatch(receiveCurrentUser(user))
    },
    (err) => {                                  // if promise returns an error we dispatch the error
        return dispatch(receiveErrors(err.responseText))
    })
}

export const logout = () => (dispatch) => {
    return APIUtil.logout().then(() => {
        return dispatch(logoutCurrentUser())
    },
    (err) => {
        return dispatch(receiveErrors(err.responseText))
    })
}

export const signup = (user) => (dispatch) => {
    return APIUtil.signup(user).then((user) => {
        return dispatch(receiveCurrentUser(user))
    },
    (err) => {
        return dispatch(receiveErrors(err.responseText))
    })
}

const receiveCurrentUser = (currentUser) => {
    return {
        type: RECEIVE_CURRENT_USER,
        currentUser
    }
}

const logoutCurrentUser = () => {
    return {
        type: LOGOUT_CURRENT_USER,
        // we're deleting the user session, so we're setting slice of state to have no user.
    }
}

const receiveErrors = (errors) => {
    return {
        type: RECEIVE_SESSION_ERRORS,
        errors
    }
}