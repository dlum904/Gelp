import React from 'react';

class ReviewShow extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        console.log(this.props)
        let stars
        if (this.props.review.rating === 5) {
            stars = <p><i className="fas fa-star" ></i><i className="fas fa-star" ></i><i className="fas fa-star" ></i><i className="fas fa-star" ></i><i className="fas fa-star" ></i></p>
        }
        else if (this.props.review.rating === 4) {
            stars = <p><i className="fas fa-star" ></i><i className="fas fa-star" ></i><i className="fas fa-star" ></i><i className="fas fa-star" ></i></p>
        }
        else if (this.props.review.rating === 3) {
            stars = <p><i className="fas fa-star" ></i><i className="fas fa-star" ></i><i className="fas fa-star" ></i></p>
        }
        else if (this.props.review.rating === 2) {
            stars = <p><i className="fas fa-star" ></i><i className="fas fa-star" ></i></p>
        }
        else if (this.props.review.rating === 1) {
            stars = <p><i className="fas fa-star" ></i></p>
        }

        return (
            <div className="review-show">
                <div className="profile-stars">
                    <div className="review-profile"><i id="profile-pic" className="far fa-user"></i></div>
            </div>
                
            <div className="review-main-body">
                <div className="stars">{stars}</div>
                    <p>{this.props.review.body}</p>
                </div>
            </div>
        )
    }
}

export default ReviewShow;

