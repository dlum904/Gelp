import { connect } from 'react-redux';
import { fetchAllBusinesses } from '../../actions/businesses_actions'
import BusinessIndex from './business_index'

const mSTP = (state) => {
    const businesses = state.entities.businesses
    // debugger
    return {
        businesses
    }

}

const mDTP = (dispatch) => {
    return {
        fetchAllBusinesses: (category) => {
            return dispatch(fetchAllBusinesses(category));
        }
    }
}

export default connect(mSTP, mDTP)(BusinessIndex);