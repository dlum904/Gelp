import React from 'react';
import { Link } from 'react-router-dom';

class Business extends React.Component {
    constructor(props) {
        super(props)
        this.state = this.props.business
    }

    componentDidMount() {
        this.props.fetchBusiness(Number(this.props.match.params.businessId))
    }

    render() {
        console.log(this.props)
        console.log(this.state)
        return (
            <div className="business-container">
                <div>images here</div>
                <div>
                </div>
            </div>

        )
    }
}

export default Business;