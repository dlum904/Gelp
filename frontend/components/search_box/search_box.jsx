import React from 'react';
import { withRouter } from 'react-router-dom'

class SearchBox extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            category: ""
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        e.preventDefault();
        this.setState({category: e.target.value})
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.fetchAllBusinesses(this.state);
        this.props.history.push("/businesses/index");
    }
    
    render() {
        return (
            <div>
            <form onSubmit={this.handleSubmit}>
                <input className="search-box"
                    type="search"
                    placeholder="pizza, coffee, sushi..."
                    onChange={this.handleChange}>
                </input>
                <button type="submit"><i className="fas fa-search"></i></button>
            </form>
            </div>
        )
    }

}

export default withRouter (SearchBox);