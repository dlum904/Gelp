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

    componentDidMount() {
        // this.props.fetchSchedules(this.props.match.params.businessId);
        // this.props.fetchBusiness(this.props.match.params.businessId);
    }


    render() {
        return (
            <div className="review-form-container">

                <div className="review-form-box">

                <form onSubmit={this.handleSubmit}>
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

                    <input className="form-text-body"
                    type="textarea"
                    onChange={this.update("body")}
                    placeholder="This place is cool YADAYADAYADA"/>
                    <input type="submit"/>
                </form>

                </div>
            </div>
        )
    }
}

export default ReviewForm;