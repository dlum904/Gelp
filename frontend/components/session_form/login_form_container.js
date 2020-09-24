import { connect } from 'react-redux';
import SessionForm from './session_form';
import { login } from '../../actions/session_actions'

const mSTP = (state) => {
    return {
        formType: "login",
        errors: state.errors.session
    }
}

const mDTP = (dispatch) => {
    return {
        processForm: (user) => dispatch(login(user))
    }
}

export default connect(mSTP, mDTP)(SessionForm);