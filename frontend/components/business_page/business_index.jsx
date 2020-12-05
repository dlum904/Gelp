import React from 'react';
import { Link } from 'react-router-dom';
import BusinessSearchShow from './business_search_show_container'

class BusinessIndex extends React.Component {
    constructor(props) {
        super(props)

    }
    avgRating(business) {
        let numRatings = Object.values(business.reviews).length;
        let sumRatings = 0;
        for (let i = 0; Object.values(business.reviews)[i]; i++) {
            sumRatings += business.reviews[i].rating;
        }
        const rating = sumRatings / numRatings;
        console.log(`rating = ${rating}`);
        switch (Math.round(rating * 2) / 2) {
            case 5:
                return (
                    <p><i id="search-star" className="fas fa-star" ></i><i id="search-star" className="fas fa-star" ></i><i id="search-star" className="fas fa-star" ></i><i id="search-star" className="fas fa-star" ></i><i id="search-star" className="fas fa-star" ></i>{numRatings}</p>
                )
            case 4.5:
                return (
                    <p><i id="search-star" className="fas fa-star" ></i><i id="search-star" className="fas fa-star" ></i><i id="search-star" className="fas fa-star" ></i><i id="search-star" className="fas fa-star" ></i><i id="search-star" className="fas fa-star-half"></i>{numRatings}</p>
                )
            case 4:
                return (
                    <p><i id="search-star" className="fas fa-star" ></i><i id="search-star" className="fas fa-star" ></i><i id="search-star" className="fas fa-star" ></i><i id="search-star" className="fas fa-star" ></i>{numRatings}</p>
                )
            case 3.5:
                return (
                    <p><i id="search-star" className="fas fa-star" ></i><i id="search-star" className="fas fa-star" ></i><i id="search-star" className="fas fa-star" ></i><i id="search-star" className="fas fa-star-half"></i>{numRatings}</p>
                )
            case 3:
                return (
                    <p><i id="search-star" className="fas fa-star" ></i><i id="search-star" className="fas fa-star" ></i><i id="search-star" className="fas fa-star" ></i>{numRatings}</p>
                )
            case 2.5:
                return (
                    <p><i id="search-star" className="fas fa-star" ></i><i id="search-star" className="fas fa-star" ></i><i id="search-star" className="fas fa-star-half"></i>{numRatings}</p>
                )
            case 2:
                return (
                    <p><i id="search-star" className="fas fa-star" ></i><i id="search-star" className="fas fa-star" ></i>{numRatings}</p>
                )
            case 1.5:
                return (
                    <p><i id="search-star" className="fas fa-star" ></i><i id="search-star" className="fas fa-star-half"></i>{numRatings}</p>
                )
            case 1:
                return (
                    <p><i id="search-star" className="fas fa-star" ></i>{numRatings}</p>
                )
            case 0.5:
                return (
                    <p><i id="search-star" className="fas fa-star-half"></i>{numRatings}</p>
                )
            default:
        }
    }


    render() {
        // will need to iterate through a slice of state provided by a search result that we get
        let num = 0;
        if (this.props.businesses) {
            return (
                <div className="business-index-container">
                    All Results
                    <div className="search-results">
                        <ul>
                            {Object.values(this.props.businesses).map((business) => {
                                const categories = business.category_2 ? business.category_3 ? business.category_1 + ", " + business.category_2 + ", " + business.category_3 : business.category_1 + ", " + business.category_2 : business.category_1;
                                num += 1;
                                return (                 
                                    <li key={business.id}>
                                        <Link className="search-result" to={`/businesses/${business.id}`}>
                                            <img className="search-result-img" src={business.photos[business.photos.length - 1]} />
                                            <div className="search-result-body">
                                                <div className="search-result-title-block">
                                                    <div>
                                                        <p className="search-result-title">{num}. {business.business_name}</p>
                                                        {this.avgRating(business)}
                                                        <p>{categories}</p>
                                                    </div>
                                                    <div className="search-result-address">
                                                        <p>{business.phone}</p>
                                                        <p>{business.street_address}</p>
                                                        <p>{business.city}</p>
                                                    </div>
                                                </div>

                                                <p className="search-result-review">" {Object.values(business.reviews)[0].body} "</p>
                                            

                                            </div>
                                        </Link>
                                    </li>
                                )
                            })}
                        </ul>
                    </div>
                </div>
            )
        }
        else
            return (null)

    }
}

export default BusinessIndex;