import React from 'react';
import { Link } from 'react-router-dom';
import ReviewShow from './review_show';

class ReviewsIndex extends React.Component {

    constructor(props) {
        super(props)

    }
    componentDidMount() {
        this.props.fetchAllReviews(this.props.business.id)
        // console.log("componentDidMount")
    }

    // componentDidUpdate() {
    //     if (!this.props.reviews.id) {
    //         this.props.fetchAllReviews(this.props.business.id)

    //     }
    // }

    render() {

        if (this.props.reviews[this.props.business.id]) {
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