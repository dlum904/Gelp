import React from 'react';
import { Link } from 'react-router-dom';
import NavBarContainer from '../nav_bar/nav_bar_container';

class BusinessPhotoIndex extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            modalIdx: null
        }
        // this.handleSubmit = this.handleSubmit.bind(this);
        // this.openModal = this.openModal.bind(this);
        this.nextModal = this.nextModal.bind(this);
        this.prevModal = this.prevModal.bind(this);
    }

    componentDidMount() {
        this.props.fetchBusiness(this.props.match.params.businessId);
    }

    componentDidUpdate(prevProps) {
        if (prevProps.match.params.businessId !== this.props.match.params.businessId) {
            this.props.fetchBusiness(this.props.match.params.businessId);
        }
    }
    // openModal(i) {
    //     this.setState({modalIdx: i});
    //     debugger
    // }
    // closeModal() {
    //     this.setState({modalIdx: null})
    // }

    nextModal() {
        if (this.props.business.photos[this.state.modalIdx + 1]) {
            this.setState({ modalIdx: this.state.modalIdx += 1 })
        }
    }
    prevModal() {
        if (this.props.business.photos[this.state.modalIdx - 1]) {
            this.setState({ modalIdx: this.state.modalIdx -= 1 })
        }
    }

    render() {
        if (this.props.business && this.state.modalIdx === null) {
            const { photos } = this.props.business;
            const photosList = [];
            for ( let i = 0; i < 30; i ++ ) {
                if (photos[i]) {
                    photosList.push(
                        <li key={i} onClick={ () => {
                                this.setState({modalIdx: i})
                        }}>
                            <img className="photo-image" src={photos[i]} />
    
                        </li>
                    )

                }
            }
            
            return (
                <div className="photos-index">
                    <header>
                        <NavBarContainer />
                    </header>
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
                    <footer>
                        <div className="mylinks">
                            <p className="about-user-title">About</p>
                            <a href="https://www.linkedin.com/in/dennis-lum-12526b7a/" target="_blank">Linkedin</a>
                            <a href="https://github.com/dlum904" target="_blank"> Git Hub</a>
                            <a href="https://angel.co/u/dennis-lum" target="_blank"> Angel List</a>
                            <a href="https://dlum904.github.io/dlum/" target="_blank"> About Me</a>
                        </div>
                        <img src={window.footerURL} alt="" />
                    </footer>

                </div>

    
            )
        }
        else if (this.props.business && this.state.modalIdx !== null) {
            const { photos } = this.props.business;
            const photosList = [];
            for (let i = 0; i < 30; i++) {
                photosList.push(
                    <li key={i} onClick={() => {
                        this.setState({ modalIdx: i })
                    }}>
                        <img className="photo-image" src={photos[i]} />

                    </li>
                )
            }
            return (
                <div className="photos-index">
                    <header>
                        <NavBarContainer />
                    </header>
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
                        <div className="modal-background" onClick={ () => {
                            this.setState({ modalIdx: null })
                            }}></div>
                            <div className="photo-large">
                                <i className="fas fa-chevron-left" onClick={
                                    this.prevModal
                                }></i>

                                <img src={this.props.business.photos[this.state.modalIdx]} />

                                <i className="fas fa-chevron-right" onClick={
                                    this.nextModal
                                }></i>

                            </div>
                        </div>
                    </div>
                    <footer>
                        <div className="mylinks">
                            <p className="about-user-title">About</p>
                            <a href="https://www.linkedin.com/in/dennis-lum-12526b7a/" target="_blank">Linkedin</a>
                            <a href="https://github.com/dlum904" target="_blank"> Git Hub</a>
                            <a href="https://angel.co/u/dennis-lum" target="_blank"> Angel List</a>
                            <a href="https://dlum904.github.io/dlum/" target="_blank"> About Me</a>
                        </div>
                        <img src={window.footerURL} alt="" />
                    </footer>
                </div>



            )
        }
        else
            return (null)
    }
}

export default BusinessPhotoIndex;