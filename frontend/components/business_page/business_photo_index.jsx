import React from 'react';
import { Link } from 'react-router-dom';

class BusinessPhotoIndex extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            modal: null
        }
        // this.handleSubmit = this.handleSubmit.bind(this);
        this.openModal = this.openModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
    }

    componentDidMount() {
        this.props.fetchBusiness(this.props.match.params.businessId);
    }

    componentDidUpdate(prevProps) {
        if (prevProps.match.params.businessId !== this.props.match.params.businessId) {
            this.props.fetchBusiness(this.props.match.params.businessId);
        }
    }
    openModal(photo) {
        // e.preventDefault();
        // debugger
        this.setState({modal: photo});
    }
    closeModal() {
        // debugger
        this.setState({modal: null})
    }

    render() {
        if (this.props.business && !this.state.modal) {
            const { photos } = this.props.business;
            const photosList = [];
            for ( let i = 0; i < 30; i ++ ) {
                photosList.push(
                    <li key={i} onClick={ () => {
                        this.openModal(photos[i])
                    }}>
                        <img className="photo-image" src={photos[i]} />

                    </li>
                )
            }
            return (
                <div className="photos-index-container">
                    <p> Photos for <Link to={`/businesses/${this.props.business.id}`}> {this.props.business.business_name}:</Link> </p>
                    <div className="photos-button-container">

                    <Link className="photos-addPhoto" to={`/businesses/${this.props.business.id}/upload`}><i className="fas fa-camera"></i> Add Photo </Link>

                    </div>
                    <div className="photos-index-images">
                        <ul>
                            {photosList}
                        </ul>
                    </div>
                </div>
    
            )
        }
        else if (this.props.business && this.state.modal) {
            const { photos } = this.props.business;
            const photosList = [];
            for (let i = 0; i < 30; i++) {
                photosList.push(
                    <li key={i} onClick={() => {
                        this.openModal(photos[i])
                    }}>
                        <img className="photo-image" src={photos[i]} />
                        {/* TO DO- Add arrows to onClick setState to this.openModal(photos[i + 1])  */}
                    </li>
                )
            }
            return (
                    <div className="photos-index-container">
                        <p> Photos for <Link to={`/businesses/${this.props.business.id}`}> {this.props.business.business_name}:</Link> </p>
                        <div className="photos-button-container">

                        <Link className="photos-addPhoto" to={`/businesses/${this.props.business.id}/upload`}><i className="fas fa-camera"></i> Add Photo </Link>

                        </div>
                        <div className="photos-index-images">
                            <ul>
                                {photosList}
                            </ul>
                        </div>

                        <div className="photo-modal">
                            <div className="modal-background" onClick={this.closeModal}></div>
                            <div className="photo-large">
                                <img src={this.state.modal} />
                            </div>
                        </div>
                    </div>



            )
        }
        else
            return (null)
    }
}

export default BusinessPhotoIndex;