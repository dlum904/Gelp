import { connect } from 'react-redux';
import Business from './business'
import { fetchBusiness } from '../../actions/businesses_actions'
import { fetchSchedules } from '../../actions/schedules_actions'

const mSTP = (state, ownProps) => {
    const business = state.entities.businesses[(ownProps.match.params.businessId)]
    // const businesses = state.entities.businesses
    const schedules = state.entities.schedules
    return {
        business,
        // buseinesses,
        schedules
    }
}

const mDTP = (dispatch) => {
    return {
        fetchBusiness: (businessId) => {
            return dispatch(fetchBusiness(businessId));
        },
        // fetchAllBusinesses: () => {
        //     return dispatch(fetchAllBusinesses());
        // },
        fetchSchedules: (businessId) => {
            return dispatch(fetchSchedules(businessId));
        }
    }
}

export default connect(mSTP, mDTP)(Business);