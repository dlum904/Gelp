import React from "react";
import { Link } from 'react-router-dom';
class ReviewForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            business_id: this.props.match.params.businessId,
            author_id: this.props.currentUser.id,
            business_name: this.props.location.aboutProps.business,
            rating: "",
            body: ""
        }
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    update(field) {
        return (e) => {
            this.setState({
                [field]: e.currentTarget.value
            })
        }
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.createReview(this.state, this.state.business_id);
        this.props.history.push(`/businesses/${this.props.match.params.businessId}`)
    }

    render() {
        return (
            <div className="review-form-container">

                <div className="review-form-box">
                <h2><Link to={`/businesses/${this.props.match.params.businessId}`}> {this.props.location.aboutProps.business}:</Link> Create a Review</h2>
                <form onSubmit={this.handleSubmit}>
                    <fieldset className="rating-radials">

                    <label>☆
                    <input onChange={this.update("rating")} type="radio" id="1st" value="1" />
                    </label>
                    <label>☆
                    <input onChange={this.update("rating")} type="radio" id="2nd" value="2" />
                    </label>
                    <label>☆
                    <input onChange={this.update("rating")} type="radio" id="3rd" value="3" />
                    </label>
                    <label>☆
                    <input onChange={this.update("rating")} type="radio" id="4th" value="4" />
                    </label>
                    <label>☆
                    <input onChange={this.update("rating")} type="radio" id="5th" value="5" />                    
                    </label> Select Your Rating

                    </fieldset>

                    <textarea
                        className="form-text-body"
                        onChange={this.update("body")}
                        placeholder="This place is cool YADAYADAYADA">
                    </textarea> 
                    <input className="form-text-submit" type="submit"/>
                </form>

                </div>
            </div>
        )
    }
}

export default ReviewForm;