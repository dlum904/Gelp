import { connect } from 'react-redux';

import UserShow from './user_show'
import { fetchUser } from '../../actions/session_actions'

const mSTP = (state) => {
    // debugger
    const currentUser = state.entities.users[state.session.id];
    return {
        currentUser
    }
}

const mDTP = (dispatch) => {
    return {
        fetchUser: (userId) => {
            debugger
            return dispatch(fetchUser(userId));
        }
    }
}

export default connect(mSTP, mDTP)(UserShow)