import { connect } from 'react-redux';
import { fetchAllBusinesses } from '../../actions/businesses_actions'
import SearchBox from './search_box'

const mSTP = (state) => {
    const businesses = state.entities.businesses
    return {
        businesses,
        type: "nav"
    }

}

const mDTP = (dispatch) => {
    return {
        fetchAllBusinesses: (category) => {
            return dispatch(fetchAllBusinesses(category));
        }
    }
}

export default connect(mSTP, mDTP)(SearchBox);