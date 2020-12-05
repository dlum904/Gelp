import React from 'react';
import { Link } from 'react-router-dom';
import SearchBox from '../search_box/search_box_container'

class Splash extends React.Component {
    constructor(props) {
        super(props);
    }
    avgRating(business) {
        let numRatings = Object.values(business.reviews).length;
        let sumRatings = 0;
        for (let i = 0; Object.values(business.reviews)[i]; i++) {
            sumRatings += business.reviews[i].rating;
        }
        const rating = sumRatings / numRatings;
        switch (Math.round(rating * 2) / 2) {
            case 5:
                return (
                    <p><i id="search-star" className="fas fa-star" ></i><i id="search-star" className="fas fa-star" ></i><i id="search-star" className="fas fa-star" ></i><i id="search-star" className="fas fa-star" ></i><i id="search-star" className="fas fa-star" ></i>{numRatings} Reviews</p>
                )
            case 4.5:
                return (
                    <p><i id="search-star" className="fas fa-star" ></i><i id="search-star" className="fas fa-star" ></i><i id="search-star" className="fas fa-star" ></i><i id="search-star" className="fas fa-star" ></i><i id="search-star" className="fas fa-star-half"></i>{numRatings} Reviews</p>
                )
            case 4:
                return (
                    <p><i id="search-star" className="fas fa-star" ></i><i id="search-star" className="fas fa-star" ></i><i id="search-star" className="fas fa-star" ></i><i id="search-star" className="fas fa-star" ></i>{numRatings} Reviews</p>
                )
            case 3.5:
                return (
                    <p><i id="search-star" className="fas fa-star" ></i><i id="search-star" className="fas fa-star" ></i><i id="search-star" className="fas fa-star" ></i><i id="search-star" className="fas fa-star-half"></i>{numRatings} Reviews</p>
                )
            case 3:
                return (
                    <p><i id="search-star" className="fas fa-star" ></i><i id="search-star" className="fas fa-star" ></i><i id="search-star" className="fas fa-star" ></i>{numRatings} Reviews</p>
                )
            case 2.5:
                return (
                    <p><i id="search-star" className="fas fa-star" ></i><i id="search-star" className="fas fa-star" ></i><i id="search-star" className="fas fa-star-half"></i>{numRatings} Reviews</p>
                )
            case 2:
                return (
                    <p><i id="search-star" className="fas fa-star" ></i><i id="search-star" className="fas fa-star" ></i>{numRatings} Reviews</p>
                )
            case 1.5:
                return (
                    <p><i id="search-star" className="fas fa-star" ></i><i id="search-star" className="fas fa-star-half"></i>{numRatings} Reviews</p>
                )
            case 1:
                return (
                    <p><i id="search-star" className="fas fa-star" ></i>{numRatings} Reviews</p>
                )
            case 0.5:
                return (
                    <p><i id="search-star" className="fas fa-star-half"></i>{numRatings} Reviews</p>
                )
            default:
        }
    }
    componentDidMount() {
        // debugger
        this.props.fetchBusiness(1);
        this.props.fetchBusiness(2);
        this.props.fetchBusiness(3);
        // debugger
    }

    render() {
        if (this.props.businesses[1]) {
            return (
                <div className="splash">
    
                    <div className="splash-background">
                        <img src={window.doughnutsURL} />
                    </div>
    
                    <div className="splash-main">
                        <div className="main-logo">
                            <Link to="/"><img src={window.gelpLogoURL} /></Link>
                        </div>
                        <SearchBox />
                    </div>
    
                    <div className="new-businesses">
                        <p className="new-businesses-title">Hot & New Businesses</p>
                        <ul className="new-business">
                            {Object.values(this.props.businesses).map((business) => {
                                const categories = business.category_2 ? business.category_3 ? business.category_1 + ", " + business.category_2 + ", " + business.category_3 : business.category_1 + ", " + business.category_2 : business.category_1;
                                return (
                                    <li key={business.id}>
                                        <Link to={`/businesses/${business.id}`}>
                                            <img className="new-business-img" src={business.photos[0]} />
                                            <p className="new-business-title">{business.business_name}</p>
                                            {this.avgRating(business)}
                                            <p>{categories}</p>
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

export default Splash;