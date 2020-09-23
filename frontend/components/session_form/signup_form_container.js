import { connect } from 'react-redux';
import SessionForm from './session_form';

const mSTP = (state) => {
    return {
        formType: "signup",
        error: state.errors,
    }
}

const mDTP = (dispatch) => {
    return {
        processForm: (user) => dispatch(signup(user))
    }
}

export default connect(mSTP, mDTP)(SessionForm);