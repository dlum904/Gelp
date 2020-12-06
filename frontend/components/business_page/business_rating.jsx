import React from 'react';
import { Link } from 'react-router-dom';

class BusinessRating extends React.Component {

    constructor(props) {
        super(props)

    }
    componentDidMount() {
        this.props.fetchAllReviews(this.props.business.id)
        // ("componentDidMount")
    }

    // componentDidUpdate() {
    //     if (!this.props.reviews.id) {
    //         this.props.fetchAllReviews(this.props.business.id)

    //     }
    // }

    render() {
    
        let stars
        // switch (this.props.review.rating) {
        //     case 5:
        //         stars = <p><i className="fas fa-star" ></i><i className="fas fa-star" ></i><i className="fas fa-star" ></i><i className="fas fa-star" ></i><i className="fas fa-star" ></i></p>;
        //         break;
        //     case 4:
        //         stars = <p><i className="fas fa-star" ></i><i className="fas fa-star" ></i><i className="fas fa-star" ></i><i className="fas fa-star" ></i></p>;
        //         break;
        //     case 3:
        //         stars = <p><i className="fas fa-star" ></i><i className="fas fa-star" ></i><i className="fas fa-star" ></i></p>;
        //         break;
        //     case 2:
        //         stars = <p><i className="fas fa-star" ></i><i className="fas fa-star" ></i></p>;
        //         break;
        //     case 1:
        //         stars = <p><i className="fas fa-star" ></i></p>
        //         break;
        //     default:
        // }
        if (this.props.reviews) {
            return (
                <div className="business-rating">

                </div>
            )
        }
        else {
            return (null)
        }
    }
}

export default BusinessRating;