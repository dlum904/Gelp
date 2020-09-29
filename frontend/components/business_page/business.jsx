import React from 'react';
import { Link } from 'react-router-dom';

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

    render() {
        if (this.props.business && this.props.schedules.monday) {
            const { business_name, category_1, category_2, category_3 } = this.props.business;
            const categories =  category_2 ? category_3 ? category_1 + category_2 + category_3 : category_1 + category_2 : category_1;
            
            return (
                <div className="business container">
                    <div>images here</div>
                    <div className="business title-block">
                        <h1>{business_name}</h1>
                        <div>
                            average review rating here
                        </div>
                        <div className="business title-block category">
                           {categories}
                        </div>
                        <div className="business title-block hours">
                            open/closed and hours
                        </div>
                        <div>
                            links to write a review or add photo
                        </div>
                    </div>

                    <div className="business location-hours">
                        <h2>Location & Hours</h2>
                        <div>Google's map here</div>
                        <div>
                            <ul> 
                                <li>Mon {this.props.schedules.monday.open} - {this.props.schedules.monday.close}</li>
                                <li>Tue {this.props.schedules.tuesday.open} - {this.props.schedules.tuesday.close}</li>
                                <li>Wed {this.props.schedules.wednesday.open} - {this.props.schedules.wednesday.close}</li>
                                <li>Thur {this.props.schedules.thursday.open} - {this.props.schedules.thursday.close}</li>
                                <li>Fri {this.props.schedules.friday.open} - {this.props.schedules.friday.close}</li>
                                <li>Sat {this.props.schedules.saturday.open} - {this.props.schedules.saturday.close}</li>
                            </ul>
                        </div>
                    </div>

                    <div className="business reviews">
                        <h2>Reviews</h2>
                    </div>
                </div>
            )
        }
        else
            return ( null )
    }
}

export default Business;