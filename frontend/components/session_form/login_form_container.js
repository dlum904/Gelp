import { connect } from 'react-redux';
import SessionForm from './session_form';

const mSTP = (state) => {
    return {
        formType: "login",
        error: state.errors
    }
}

const mDTP = (dispatch) => {
    return {
        processForm: (user) => dispatch(login(user))
    }
}

export default connect(mSTP, mDTP)(SessionForm);