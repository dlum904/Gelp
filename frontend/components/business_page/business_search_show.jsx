import React from 'react';
import { Link } from 'react-router-dom';

class BusinessSearchShow extends React.Component {
    constructor(props) {
        super(props)

    }

    componentDidMount() {
        this.props.fetchAllReviews(this.props.business.id);
    }

    // componentDidUpdate(prevProps) {
    //     debugger
    //     if (prevProps.business.id !== this.props.business.id) {
    //         this.props.fetchAllReviews(this.props.business.id)
    //     }
    // }
    

    render() {
        // debugger
        if (this.props.business && Object.values(this.props.reviews)[0]) {
            // debugger
            const { id, business_name, category_1, category_2, category_3, photos, street_address, phone, city, state, business_zip_code } = this.props.business;
            const categories = category_2 ? category_3 ? category_1 + ", " + category_2 + ", " + category_3 : category_1 + ", " + category_2 : category_1;
            let numRatings = 0;
            let sumRatings = 0;
            for ( let i = 0; i < Object.values(this.props.reviews).length; i++ ) {

                numRatings += 1;
                sumRatings += Object.values(this.props.reviews)[i].rating;
            }
            const avgRating = Math.round(sumRatings / numRatings);
            let stars
            switch (avgRating) {
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
            return (
                <div className="business-search-show-container">
                    <div className="business-search-show-image">
                        <img src={photos[photos.length - 1]} />
                    </div>
                    <div className="business-title-block">
                        <h1>{business_name}</h1>
                        <div className="stars">
                            {stars}
                        </div>
                        <div className="business-title-block-category">
                            {categories}
                        </div>
                        <div className="business-search-show-review">
                            {Object.values(this.props.reviews)[0].body}
                        </div>
                    </div>

                </div>
            )
        }
        else
            return (null)
    }
}

export default BusinessSearchShow;