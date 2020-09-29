import { connect } from 'react-redux';
import Business from './business'
import { fetchBusiness } from '../../actions/businesses_actions'
import { fetchSchedules } from '../../actions/schedules_actions'

const mSTP = (state, ownProps) => {
    const business = state.entities.businesses[parseInt(ownProps.match.params.businessId)]
    const schedules = state.entities.schedules
    return {
        business,
        schedules
    }
}

const mDTP = (dispatch) => {
    return {
        fetchBusiness: (businessId) => {
            return dispatch(fetchBusiness(businessId));
        },
        fetchSchedules: (businessId) => {
            return dispatch(fetchSchedules(businessId));
        }
    }
}

export default connect(mSTP, mDTP)(Business);