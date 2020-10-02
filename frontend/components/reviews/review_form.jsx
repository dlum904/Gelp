import React from "react";

class ReviewForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            rating: "",
            body: ""
        }
    }

    render() {
        return (
            <div className="review-form-container">
                <form onSubmit={this.handleOnSubmit}></form>
                <div>
                    <label>☆
                    <input type="radio" id="1st" value="1" />
                    </label>
                    <label>☆
                    <input type="radio" id="2nd" value="2" />
                    </label>
                    <label>☆
                    <input type="radio" id="3rd" value="3" />
                    </label>
                    <label>☆
                    <input type="radio" id="4th" value="4" />
                    </label>
                    <label>☆
                    <input onChange={this.handleClick} type="radio" id="5th" value="5" />
                    </label>
                </div>
                <input
                type="textarea"
                onChange={this.update("body")}
                placeholder="This place is cool YADAYADAYADA"/>
                <input type="submit"/>
            </div>
        )
    }
}

export default ReviewForm;