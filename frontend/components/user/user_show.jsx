import React from 'react';
import { Link } from 'react-router-dom';
import NavBarContainer from '../nav_bar/nav_bar_container';
import zipcodes from 'zipcodes';
import * as APIUtil from '../../util/businesses_api_util'
class UserShow extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.props.fetchUser(this.props.currentUser.id)
    }

    render() {
        return (
            <div className="user-show">
                <header >
                    <NavBarContainer />
                </header>
                <div className="user-show-container">
                    
                    <div className="profile-info">
                        <i id="user-profile-pic" className="far fa-user"></i>
                        <ul>
                            <li>
                                <p className="profile-currentUser" >{this.props.currentUser.first_name} {this.props.currentUser.last_name[0]}.</p>
                            </li>
                            <li>
                                <p>{zipcodes.lookup(this.props.currentUser.zip_code).city}, {zipcodes.lookup(this.props.currentUser.zip_code).state}</p>
                            </li>
                            <li>
                                <p><i className="fas fa-star" >  </i> {this.props.currentUser.reviews.length} Reviews</p>
                            </li>
                        </ul>
                    </div>
                    <div className="profile-body">
                        <div className="profile-reviews">
                            <p className="profile-review-header"> REVIEWS </p>
                            <ul>
                                {Object.values(this.props.currentUser.reviews).map((review) => {
                                    let stars
                                    switch (review.rating) {
                                        case 5:
                                            stars = <p><i className="fas fa-star" ></i><i className="fas fa-star" ></i><i className="fas fa-star" ></i><i className="fas fa-star" ></i><i className="fas fa-star" ></i></p>;
                                            break;
                                        case 4:
                                            stars = <p><i className="fas fa-star" ></i><i className="fas fa-star" ></i><i className="fas fa-star" ></i><i className="fas fa-star" ></i><i id="empty-star" className="fas fa-star" ></i></p>;
                                            break;
                                        case 3:
                                            stars = <p><i className="fas fa-star" ></i><i className="fas fa-star" ></i><i className="fas fa-star" ></i><i id="empty-star" className="fas fa-star" ></i><i id="empty-star" className="fas fa-star" ></i></p>;
                                            break;
                                        case 2:
                                            stars = <p><i className="fas fa-star" ></i><i className="fas fa-star" ></i><i id="empty-star" className="fas fa-star" ></i><i id="empty-star" className="fas fa-star" ></i><i id="empty-star" className="fas fa-star" ></i></p>;
                                            break;
                                        case 1:
                                            stars = <p><i className="fas fa-star" ></i><i id="empty-star" className="fas fa-star" ></i><i id="empty-star" className="fas fa-star" ></i><i id="empty-star" className="fas fa-star" ></i><i id="empty-star" className="fas fa-star" ></i></p>
                                            break;
                                        default:
                                    }

                                    const date = new Date(review.created_at);
                                    const fullDate = date.getMonth() + "/" + date.getDate() + "/" + date.getFullYear();

                                    return <li key={review.id}>
                                        <i id="user-profile-review-pic" className="far fa-user"></i>
                                            <div className="user-profile-review">
                                            <p className="profile-business">You wrote this review for <Link to={`/businesses/${review.business_id}`}>{review.business_name} </Link></p>
                                            <div className="stars">{stars}<p>{fullDate}</p></div>
                                                
                                                <p className="profile-review-body">{review.body}</p>

                                            </div>
                                        </li>
                                })}
                            </ul>
                        </div>
                        <div className="about-user">
                            <p className="about-user-title">About {this.props.currentUser.first_name} {this.props.currentUser.last_name[0]}.</p>
                            <p className="about-user-bold">Yelping Since</p>
                            <p>{new Date(this.props.currentUser.created_at).toDateString()}</p>
                            <p className="about-user-bold">Location</p>
                            <p>{zipcodes.lookup(this.props.currentUser.zip_code).city}, {zipcodes.lookup(this.props.currentUser.zip_code).state}</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

}


export default UserShow;