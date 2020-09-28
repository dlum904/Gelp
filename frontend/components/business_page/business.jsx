import React from 'react';
import { Link } from 'react-router-dom';

class Business extends React.Component {
    constructor(props) {
        super(props)
        this.state = this.props.business
    }

    componentDidMount() {
        this.props.fetchBusiness(parseInt(this.props.match.params.businessId))
        debugger
    }

    render() {
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