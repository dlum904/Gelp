import { connect } from 'react-redux';
import BusinessPhotoIndex from './business_photo_index';
import { fetchBusiness } from '../../actions/businesses_actions';

const mSTP = (state, ownProps) => {
    const business = state.entities.businesses[(ownProps.match.params.businessId)];
    return {
        business
    }
}

const mDTP = (dispatch) => {
    return {
        fetchBusiness: (businessId) => {
            return dispatch(fetchBusiness(businessId));
        }
    }
}

export default connect(mSTP, mDTP)(BusinessPhotoIndex);