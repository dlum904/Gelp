import React from 'react';
import { Link } from 'react-router-dom';
import Reviews from '../reviews/reviews_index_container'
import BusinessReviews from '../business_page/business_rating_container'
import GoogleMap from './googleMap'

class Business extends React.Component {
    constructor(props) {
        super(props)

    }

    componentDidMount() {
        this.props.fetchSchedules(this.props.match.params.businessId);
        this.props.fetchBusiness(this.props.match.params.businessId);
    }

    componentDidUpdate(prevProps) {
        if (prevProps.match.params.businessId !== this.props.match.params.businessId) {
            this.props.fetchSchedules(this.props.match.params.businessId);
            this.props.fetchBusiness(this.props.match.params.businessId);
        } 
    }

    open() {
        const date = new Date().toDateString().split(" ")[0]
        const daysArray = Object.keys(this.props.schedules)
        
        let currentDay = ""
        const daysSchedule = this.props.schedules

        daysArray.forEach((days) => {
            
            if (days.includes(date.toLowerCase())) {

                currentDay = days
            }
        })

        return `${this.props.schedules[currentDay].open} -  ${this.props.schedules[currentDay].close}`
    }

    avgRating() {
        // debugger
        let numRatings = Object.values(this.props.business.reviews).length;
        let sumRatings = 0;
        for ( let i = 0 ; Object.values(this.props.business.reviews)[i]; i++ ) {
            sumRatings += this.props.business.reviews[i].rating;
        }
        const rating = sumRatings / numRatings;
        console.log(`rating = ${rating}`);
        switch (Math.round(rating * 2) / 2) {
            case 5:
                return (
                    <p className="avgRatings"><i id="title-star" className="fas fa-star" ></i><i id="title-star" className="fas fa-star" ></i><i id="title-star" className="fas fa-star" ></i><i id="title-star" className="fas fa-star" ></i><i id="title-star" className="fas fa-star" ></i>{numRatings} reviews</p>
                    )
            case 4.5:
                return (
                    <p className="avgRatings"><i id="title-star" className="fas fa-star" ></i><i id="title-star" className="fas fa-star" ></i><i id="title-star" className="fas fa-star" ></i><i id="title-star" className="fas fa-star" ></i><i id="title-star" className="fas fa-star-half"></i>{numRatings} reviews</p>
                ) 
            case 4:
                return (
                    <p className="avgRatings"><i id="title-star" className="fas fa-star" ></i><i id="title-star" className="fas fa-star" ></i><i id="title-star" className="fas fa-star" ></i><i id="title-star" className="fas fa-star" ></i>{numRatings} reviews</p>
                )
            case 3.5:
                return (
                    <p className="avgRatings"><i id="title-star" className="fas fa-star" ></i><i id="title-star" className="fas fa-star" ></i><i id="title-star" className="fas fa-star" ></i><i id="title-star" className="fas fa-star-half"></i>{numRatings} reviews</p>
                )
            case 3:
                return (
                    <p className="avgRatings"><i id="title-star" className="fas fa-star" ></i><i id="title-star" className="fas fa-star" ></i><i id="title-star" className="fas fa-star" ></i>{numRatings} reviews</p>
                )
            case 2.5:
                return(
                    <p className="avgRatings"><i id="title-star" className="fas fa-star" ></i><i id="title-star" className="fas fa-star" ></i><i id="title-star" className="fas fa-star-half"></i>{numRatings} reviews</p>
                )
            case 2:
                return(
                    <p className="avgRatings"><i id="title-star" className="fas fa-star" ></i><i id="title-star" className="fas fa-star" ></i>{numRatings} reviews</p>
                )
            case 1.5:
                return (
                    <p className="avgRatings"><i id="title-star" className="fas fa-star" ></i><i id="title-star" className="fas fa-star-half"></i>{numRatings} reviews</p>
                )
            case 1:
                return (
                    <p className="avgRatings"><i id="title-star" className="fas fa-star" ></i></p>
                )
            case 0.5:
                return (
                    <p className="avgRatings"><i id="title-star" className="fas fa-star-half"></i></p>
                )
            default:
        }
    }
    
    render() {
        if (this.props.business && this.props.schedules.monday) {
            const { id, business_name, category_1, category_2, category_3, photos, street_address, phone, city, state, business_zip_code } = this.props.business;
            const categories =  category_2 ? category_3 ? category_1 + ", " + category_2 + ", " + category_3 : category_1 + ", " + category_2 : category_1;
            const url = `http://maps.google.com/?q=${this.props.business.street_address}`
            return (
                <div className="business-container">
                    <div className= "business-images"><img src={photos[photos.length - 1]} />
                        <img src={photos[photos.length - 2]} />
                        <img src={photos[photos.length - 3]} />
                        <img src={photos[photos.length - 4]} />
                    </div>

                    <Link className="image-index-link" to={`/businesses/${id}/images`}>See All</Link>
                    
                    <div className="business-container-main">
                        <div className="business-container-left">
                            <div className="business-title-block">
                                <h1>{business_name}</h1>
                                <div>
                                    {this.avgRating()}
                                </div>
                                <div className="business-title-block-category">
                                {categories}
                                </div>
                                <div className="business-title-block-hours">
                                    <div className="hours-body"><p>Open</p>  {this.open()}</div>
                                </div>
                                <ul className="business-buttons">
                                    <li className="addreview-button">

                                        <Link to={{
                                            pathname:`/businesses/${id}/reviews/create`,
                                            aboutProps: {
                                                business: this.props.business.business_name
                                            }
                                        }}><i id="add-review-star" className="fas fa-star" ></i> Write a Review </Link>
                                    </li>
                                    <li className="addphoto-button">
                                        <Link to={`/businesses/${id}/upload`}><i className="fas fa-camera"></i> Add Photo </Link>
                                    </li>
                                </ul>
                            </div>

                            <div className="business-location-hours">
                                <h2>Location & Hours</h2>

                                <div className="address-location-block">
                                    <div className="address-block">
                                        <GoogleMap business={this.props.business}/>
                                        {/* <img src={window.mapURL} /> */}
                                        <p>{street_address}</p>
                                        <p>{city}, {state} {business_zip_code}</p>
                                        <p>{phone}</p>
                                    </div>
                                    <ul className="schedule-block"> 
                                        <li>Mon {this.props.schedules.monday.open} - {this.props.schedules.monday.close}</li>
                                        <li>Tue {this.props.schedules.tuesday.open} - {this.props.schedules.tuesday.close}</li>
                                        <li>Wed {this.props.schedules.wednesday.open} - {this.props.schedules.wednesday.close}</li>
                                        <li>Thur {this.props.schedules.thursday.open} - {this.props.schedules.thursday.close}</li>
                                        <li>Fri {this.props.schedules.friday.open} - {this.props.schedules.friday.close}</li>
                                        <li>Sat {this.props.schedules.saturday.open} - {this.props.schedules.saturday.close}</li>
                                        <li>Sun {this.props.schedules.saturday.open} - {this.props.schedules.saturday.close}</li>
                                    </ul>
                                </div>
                            </div>

                            <div className="business-reviews">
                                <h2>Recommended Reviews</h2>
                                <Reviews business={this.props.business}/>
                            </div>
                        </div>

                        <div className="business-container-right">
                            <ul>
                                <li>
                                    <p className="side-info-phone">{this.props.business.phone}</p>
                                    <i className="fas fa-phone-volume"></i>
                                </li>
                                <li>
                                    <a className="side-info" href={this.props.business.website}>{this.props.business.website}</a>
                                    <i className="fas fa-external-link-square-alt"></i>
                                </li>
                                <li>
                                    <div className="side-info">
                                        <a href={url}> Get Directions </a>
                                        <p className="side-info-address">{street_address}, {city}, {state} {business_zip_code}</p>
                                    </div>
                                    <i className="fas fa-directions"></i>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            )
        }
        else
            return ( null )
    }
}

export default Business;