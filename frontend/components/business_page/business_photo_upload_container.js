import { connect } from 'react-redux';
import { fetchBusiness } from '../../actions/businesses_actions'
import BusinessPhotoUpload from './business_photo_upload';

const mSTP = (state, ownProps) => {
    const business = state.entities.businesses[ownProps.match.params.businessId]
    return {
        business
    }
}

const mDTP = (dispatch) => {
    return {
        fetchBusiness: (businessId) => {
            return dispatch(fetchBusiness(businessId));
        },
    }
}

export default connect(mSTP, mDTP)(BusinessPhotoUpload);