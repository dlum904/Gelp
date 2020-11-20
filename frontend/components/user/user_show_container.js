import { connect } from 'react-redux';

import UserShow from './user_show'

const mSTP = (state) => {
    // debugger
    const currentUser = state.entities.users[state.session.id];
    return {
        currentUser
    }
}

export default connect(mSTP, null)(UserShow)