import React from 'react';
import { Link } from 'react-router-dom';
import * as APIUtil from '../../util/businesses_api_util'
class UserShow extends React.Component {
    constructor(props) {
        super(props)
    }

    // getBusiness(id) {
        // $.ajax({
        //     method: "GET",
        //     url: `api/businesses/${id}`,
        //     dataType: "json",
        //     success: function(data) {
        //         return data
        //         console.log(data)
        //     }
        // })

        // return APIUtil.fetchBusiness(id).then((business) => {
        //     console.log(business.business_name);
        //     return business.business_name;
        // })
    // }

    componentDidMount() {
        debugger
        this.props.fetchUser(this.props.currentUser.id)
        debugger
    }

    render() {

        return (
            <div className="user-show-container">
                
                <div className="profile-info">
                    <i id="user-profile-pic" className="far fa-user"></i>
                    <ul>
                        <li>
                            <p className="profile-currentUser" >{this.props.currentUser.first_name} {this.props.currentUser.last_name[0]}.</p>
                        </li>
                        <li>
                            <p><i className="fas fa-star" ></i> {this.props.currentUser.reviews.length} Reviews</p>
                        </li>
                    </ul>
                </div>
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
                                    stars = <p><i className="fas fa-star" ></i><i className="fas fa-star" ></i><i className="fas fa-star" ></i><i className="fas fa-star" ></i></p>;
                                    break;
                                case 3:
                                    stars = <p><i className="fas fa-star" ></i><i className="fas fa-star" ></i><i className="fas fa-star" ></i></p>;
                                    break;
                                case 2:
                                    stars = <p><i className="fas fa-star" ></i><i className="fas fa-star" ></i></p>;
                                    break;
                                case 1:
                                    stars = <p><i className="fas fa-star" ></i></p>
                                    break;
                                default:
                            }
                            // let business = this.getBusiness(1);
                            // console.log(business)
                            
                            return <li key={review.id}>
                                <i id="user-profile-review-pic" className="far fa-user"></i>
                                    <div className="user-profile-review">
                                    <p className="profile-business">You wrote this review for <Link to={`/businesses/${review.buseinss_id}`}>{review.business_name} </Link></p>
                                        <div className="stars">{stars}</div>
                                        <p className="profile-review-body">{review.body}</p>

                                    </div>
                                </li>
                        })}
                    </ul>
                </div>
            </div>
        )
    }

}


export default UserShow;