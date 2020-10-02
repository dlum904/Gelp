import React from "react";

class ReviewForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            business_id: parseInt(this.props.match.params.businessId),
            author_id: 1,
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

                        {/* <fieldset className="rating">
                            <input onChange={this.update("rating")} type="radio" id="star5" name="rating" value="5" /><label htmlFor="star5" title="Rocks!"></label>
                            <input onChange={this.update("rating")} type="radio" id="star4" name="rating" value="4" /><label htmlFor="star4" title="Pretty good"></label>
                            <input onChange={this.update("rating")} type="radio" id="star3" name="rating" value="3" /><label htmlFor="star3" title="Meh"></label>
                            <input onChange={this.update("rating")} type="radio" id="star2" name="rating" value="2" /><label htmlFor="star2" title="Kinda bad"></label>
                            <input onChange={this.update("rating")} type="radio" id="star1" name="rating" value="1" /><label htmlFor="star1" title="Sucks big time"></label>
                        </fieldset> */}

                    <input className="form-text-body"
                    type="textarea"
                    onChange={this.update("body")}
                    placeholder="This place is cool YADAYADAYADA"/>
                    <input className="form-text-submit" type="submit"/>
                </form>

                </div>
            </div>
        )
    }
}

export default ReviewForm;