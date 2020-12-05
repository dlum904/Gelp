import { connect } from 'react-redux';
import SessionForm from './session_form';
import { login, clearErrors } from '../../actions/session_actions'

const mSTP = (state) => {
    return {
        formType: "login",
        errors: state.errors.session
    }
}

const mDTP = (dispatch) => {
    return {
        processForm: (user) => {
            return dispatch(login(user))
        },
        clearErrors: () => {
            return dispatch(clearErrors())
        }
    }
}

export default connect(mSTP, mDTP)(SessionForm);