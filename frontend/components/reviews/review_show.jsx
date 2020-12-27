import React from 'react';

class ReviewShow extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        let stars
        switch (this.props.review.rating) {
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
        const date = new Date(this.props.review.created_at);
        const fullDate = date.getMonth() + "/" + date.getDate() + "/" + date.getFullYear();

        return (
            <div className="review-show">
                <div className="reviewer-info">
                        <i id="profile-pic" className="far fa-user"></i>
                        <div className="reviewer-name">{this.props.review.author.first_name} {this.props.review.author.last_name[0]}.</div>
                </div>
                    
                <div className="review-main-body">
                    <div className="stars">{stars}<p>{fullDate}</p></div>
                        <p>{this.props.review.body}</p>
                </div>
            </div>
        )
    }
}

export default ReviewShow;

