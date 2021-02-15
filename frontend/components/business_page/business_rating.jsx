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