import React from 'react';
import { Link } from 'react-router-dom';

class Business extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        // this.props.fetchAllBusinesses();
        this.props.fetchBusiness(parseInt(this.props.match.params.businessId));
    }

    render() {
        if (this.props.business) {
           let { business_name, category_1 } = this.props.business
            return (
                <div className="business container">
                    <div>images here</div>
                    <div className="business title-block">
                        <h1>{business_name}</h1>
                        <div>
                            average review rating here
                        </div>
                        <div className="business title-block category">
                           {category_1}
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
                        <div>hours open here</div>
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