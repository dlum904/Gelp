import { connect } from 'react-redux';
import { fetchAllBusinesses } from '../../actions/businesses_actions'
import SearchBox from './search_box'

const mSTP = (state) => {
    const businesses = state.entities.businesses
    return {
        businesses
    }

}

const mDTP = (dispatch) => {
    return {
        fetchAllBusinesses: () => {
            return dispatch(fetchAllBusinesses());
        }
    }
}

export default connect(mSTP, mDTP)(SearchBox);