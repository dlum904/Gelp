import React from 'react';
import { Link } from 'react-router-dom';
import ReviewShow from './review_show';

class ReviewsIndex extends React.Component {

    constructor(props) {
        super(props)

    }
    componentDidMount() {
        this.props.fetchAllReviews(this.props.business.id)
    }

    componentDidUpdate() {

        if (this.props.business.reviews.length !== Object.values(this.props.reviews).length) {
            this.props.fetchAllReviews(this.props.business.id)
        }
    }


    render() {

        if (this.props.reviews) {
            return (
                <div className="reviews-container">
                    
                    <ul>
                    {Object.values(this.props.reviews).map((review) => {
                        return <li key={review.id}><ReviewShow review={review}/></li>
                    })}
                    </ul>
                </div>
            )
        }
        else {
            return ( null )
        }
    }
}

export default ReviewsIndex;