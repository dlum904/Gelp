import React from "react";
import { Link } from 'react-router-dom';
import NavBarContainer from '../nav_bar/nav_bar_container';
import $ from 'jquery'
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

    componentDidMount() {
        $('#empty-star-5').mouseover(function() {
            $('#empty-star-5').css('color', 'red')
            $('#empty-star-4').css('color', 'red')
            $('#empty-star-3').css('color', 'red')
            $('#empty-star-2').css('color', 'red')
            $('#empty-star-1').css('color', 'red')
        })
        $('#empty-star-5').mouseout(function() {
            $('#empty-star-5').css('color', '')
            $('#empty-star-4').css('color', '')
            $('#empty-star-3').css('color', '')
            $('#empty-star-2').css('color', '')
            $('#empty-star-1').css('color', '')
        })

        $('#empty-star-4').mouseover(function() {
            $('#star-5').css('color', 'tomato')
            $('#empty-star-5').css('color', '')
            $('#empty-star-4').css('color', 'red')
            $('#empty-star-3').css('color', 'red')
            $('#empty-star-2').css('color', 'red')
            $('#empty-star-1').css('color', 'red')
        })
        $('#empty-star-4').mouseout(function() {
            $('#star-5').css('color', 'red')
            $('#empty-star-5').css('color', '')
            $('#empty-star-4').css('color', '')
            $('#empty-star-3').css('color', '')
            $('#empty-star-2').css('color', '')
            $('#empty-star-1').css('color', '')
        })

        $('#empty-star-3').mouseover(function() {
            $('#star-5').css('color', 'tomato')
            $('#star-4').css('color', 'tomato')
            $('#empty-star-5').css('color', '')
            $('#empty-star-4').css('color', '')
            $('#empty-star-3').css('color', 'red')
            $('#empty-star-2').css('color', 'red')
            $('#empty-star-1').css('color', 'red')
        })
        $('#empty-star-3').mouseout(function() {
            $('#star-5').css('color', 'red')
            $('#star-4').css('color', 'red')
            $('#empty-star-5').css('color', '')
            $('#empty-star-4').css('color', '')
            $('#empty-star-3').css('color', '')
            $('#empty-star-2').css('color', '')
            $('#empty-star-1').css('color', '')
        })

        $('#empty-star-2').mouseover(function() {
            $('#star-5').css('color', 'tomato')
            $('#star-4').css('color', 'tomato')
            $('#star-3').css('color', 'tomato')
            $('#empty-star-5').css('color', '')
            $('#empty-star-4').css('color', '')
            $('#empty-star-3').css('color', '')
            $('#empty-star-2').css('color', 'red')
            $('#empty-star-1').css('color', 'red')
        })
        $('#empty-star-2').mouseout(function() {
            $('#star-5').css('color', 'red')
            $('#star-4').css('color', 'red')
            $('#star-3').css('color', 'red')
            $('#empty-star-5').css('color', '')
            $('#empty-star-4').css('color', '')
            $('#empty-star-3').css('color', '')
            $('#empty-star-2').css('color', '')
            $('#empty-star-1').css('color', '')
        })

        $('#empty-star-1').mouseover(function() {
            $('#star-5').css('color', 'tomato')
            $('#star-4').css('color', 'tomato')
            $('#star-3').css('color', 'tomato')
            $('#star-2').css('color', 'tomato')
            $('#empty-star-5').css('color', '')
            $('#empty-star-4').css('color', '')
            $('#empty-star-3').css('color', '')
            $('#empty-star-2').css('color', '')
            $('#empty-star-1').css('color', 'red')
        })
        $('#empty-star-1').mouseout(function() {
            $('#star-5').css('color', 'red')
            $('#star-4').css('color', 'red')
            $('#star-3').css('color', 'red')
            $('#star-2').css('color', 'red')
            $('#empty-star-5').css('color', '')
            $('#empty-star-4').css('color', '')
            $('#empty-star-3').css('color', '')
            $('#empty-star-2').css('color', '')
            $('#empty-star-1').css('color', '')
        })


    }
    
    update(field) {
        // debugger
        return (e) => {
            // debugger
            this.setState({
                [field]: e.currentTarget.value
            })
            console.log(this.state.rating)
        }
    }

    handleClick(field, rating) {
        return (e) => {
            this.setState({
                [field]: e.currentTarget.value
            })
            switch (rating) {
                case 5:
                    document.querySelector("label:nth-child(1) i").id = "star-1"
                    document.querySelector("label:nth-child(2) i").id = "star-2"
                    document.querySelector("label:nth-child(3) i").id = "star-3"
                    document.querySelector("label:nth-child(4) i").id = "star-4"
                    document.querySelector("label:nth-child(5) i").id = "star-5"
                    
                    
                    break;
                    case 4:
                        document.querySelector("label:nth-child(1) i").id = "star-1"
                        document.querySelector("label:nth-child(2) i").id = "star-2"
                        document.querySelector("label:nth-child(3) i").id = "star-3"
                        document.querySelector("label:nth-child(4) i").id = "star-4"
                        document.querySelector("label:nth-child(5) i").id = "empty-star-5"
                        $('#empty-star-5').css('color', '')

                    break;
                case 3:
                    document.querySelector("label:nth-child(1) i").id = "star-1"
                    document.querySelector("label:nth-child(2) i").id = "star-2"
                    document.querySelector("label:nth-child(3) i").id = "star-3"
                    document.querySelector("label:nth-child(4) i").id = "empty-star-4"
                    document.querySelector("label:nth-child(5) i").id = "empty-star-5"
                    $('#empty-star-4').css('color', '')
                    $('#empty-star-5').css('color', '')

                    break;
                case 2:
                    document.querySelector("label:nth-child(1) i").id = "star-1"
                    document.querySelector("label:nth-child(2) i").id = "star-2"
                    document.querySelector("label:nth-child(3) i").id = "empty-star-3"
                    document.querySelector("label:nth-child(4) i").id = "empty-star-4"
                    document.querySelector("label:nth-child(5) i").id = "empty-star-5"
                    $('#empty-star-3').css('color', '')
                    $('#empty-star-4').css('color', '')
                    $('#empty-star-5').css('color', '')

                    break;
                case 1:
                    document.querySelector("label:nth-child(1) i").id = "star-1"
                    document.querySelector("label:nth-child(2) i").id = "empty-star-2"
                    document.querySelector("label:nth-child(3) i").id = "empty-star-3"
                    document.querySelector("label:nth-child(4) i").id = "empty-star-4"
                    document.querySelector("label:nth-child(5) i").id = "empty-star-5"
                    $('#empty-star-2').css('color', '')
                    $('#empty-star-3').css('color', '')
                    $('#empty-star-4').css('color', '')
                    $('#empty-star-5').css('color', '')
                    break;
                default:

            }
            // document.getElementById("empty-star")
            console.log(this.state.rating)
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
                <header >
                    <NavBarContainer />
                </header>
                <div className="review-form-box">
                <h2><Link to={`/businesses/${this.props.match.params.businessId}`}> {this.props.location.aboutProps.business}:</Link> Create a Review</h2>
                <form onSubmit={this.handleSubmit}>
                    <fieldset className="rating-radials">

                            <label><i id="empty-star-1" className="fas fa-star" ></i>
                                <input onClick={this.handleClick("rating", 1)} type="radio" id="radio-star" value="1" />
                    </label>
                            <label><i id="empty-star-2" className="fas fa-star" ></i>
                                <input onClick={this.handleClick("rating", 2)} type="radio" id="radio-star" value="2" />
                    </label>
                            <label><i id="empty-star-3" className="fas fa-star" ></i>
                                <input onClick={this.handleClick("rating", 3)} type="radio" id="radio-star" value="3" />
                    </label>
                            <label><i id="empty-star-4" className="fas fa-star" ></i>
                                <input onClick={this.handleClick("rating", 4)} type="radio" id="radio-star" value="4" />
                    </label>
                            <label><i id="empty-star-5" className="fas fa-star" ></i>
                    <input onClick={this.handleClick("rating", 5)} type="radio" id="radio-star" value="5" />                    
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