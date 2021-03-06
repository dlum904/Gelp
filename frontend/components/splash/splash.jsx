import React from 'react';
import { Link } from 'react-router-dom';
import SearchBox from '../search_box/search_box_container'
import NavBarContainer from '../nav_bar/nav_bar_container';

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
        this.props.fetchBusiness(1);
        this.props.fetchBusiness(2);
        this.props.fetchBusiness(3);
        this.props.fetchBusiness(4);
    }

    render() {
        if (this.props.businesses[3]) {
            return (
                <div className="splash">
                    <header id="main-nav-bar">
                        <NavBarContainer />
                    </header>
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
                            {Object.values(this.props.businesses).slice(0, 4).map((business) => {
                                const categories = business.category_2 ? business.category_3 ? business.category_1 + ", " + business.category_2 + ", " + business.category_3 : business.category_1 + ", " + business.category_2 : business.category_1;
                                return (
                                    <li key={business.id}>
                                        <Link to={`/businesses/${business.id}`}>
                                            <img className="new-business-img" src={business.photos[0]} />
                                            <p className="new-business-title">{business.business_name}</p>
                                            {this.avgRating(business)}
                                            <p>{business.cost} · {categories}</p>
                                        </Link>
                                    </li>

                                )
                            })}
                        </ul>

                    </div>
                    <footer>
                        <div className="mylinks">
                            <p className="about-user-title">About</p>
                            <a href="https://www.linkedin.com/in/dennis-lum-12526b7a/" target="_blank">Linkedin</a>
                            <a href="https://github.com/dlum904" target="_blank"> Git Hub</a>
                            <a href="https://angel.co/u/dennis-lum" target="_blank"> Angel List</a>
                            <a href="https://dlum904.github.io/dlum/" target="_blank"> About Me</a>
                        </div>
                        <img src={window.footerURL} alt="" />
                    </footer>
                </div>
            )
        }
        else
            return (null)
    }
}

export default Splash;