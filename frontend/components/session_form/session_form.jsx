import React from 'react';
import { Link } from 'react-router-dom';

class SessionForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            first_name: "",
            last_name: "",
            email: "",
            password: "",
            zip_code: "",
            birthday: ""
        };

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    update(field) {
        return (e) => this.setState({
            [field]: e.currentTarget.value
        });
    }

    updateBirthday(field){
        return (e) => this.setState({
            [field]: e.currentTarget.value
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.processForm(this.state);
    }

    emailValid() {
        if (!this.state.email.includes("@") && this.state.email !== "") {
            return "Please enter an email address."
        }
    }

    renderErrors() {
        // console.log(this.props.errors);
        let error = this.props.errors
        if (error.length > 0 && error.slice(-1) instanceof Array) {
            // console.log(error)
            // console.log(error.slice(-1)[0]);
            return (
                <p>{error.slice(-1)[0]}</p>
            )
        }
        else if (error.length > 0)
            return (
                <p>{error.slice(-1)}</p>
            )
        // return (
        //     <ul>
        //         {this.props.errors.map((error, idx) => (
        //             <li key={`error-${idx}`}>
        //                 {error}
        //             </li>
        //         ))}
        //     </ul>
        // )
    }

                       
    
    render () {
        if (this.props.formType === "login") {      //login form
            return (
                
                <div className="session-form-container">
                    <div className="big-errors">{this.renderErrors()}</div>
                    <form onSubmit={this.handleSubmit} className="session-form-box">
                        <p className="session-form-title">Login to Gelp</p>
                        <p className="session-form-title-2">New to Gelp? <Link to="/signup">Sign Up</Link></p>
                        <input type="text"
                            value={this.state.email}
                            placeholder="Email"
                            onChange={this.update("email")}
                            className="login-input"
                        />
                        {this.emailValid()}
                        <input type="password"
                            value={this.state.password}
                            placeholder="Password"
                            onChange={this.update("password")}
                            className="login-input"
                        />
                        <div className="forgot-pw">Forgot password?</div>
                        <input className="login-submit"type="submit" value="Log In"/>
                        <p className="session-form-foot">New to Gelp? <Link to="/signup">Sign Up</Link></p>
                    </form>
                </div>
            )
        }
        else {                                      //sign up form
            return (
                <div className="session-form-container">
                    <div className="big-errors">{this.renderErrors()}</div>
                    <form onSubmit={this.handleSubmit} className="session-form-box">
                        <p className="session-form-title">Sign up for Gelp</p>
                        <p className="session-form-title-2">Connect with great local businesses</p>

                        <input type="text"
                            value={this.state.first_name}
                            placeholder="First Name"
                            onChange={this.update("first_name")}
                            className="signup-name-input"
                        />
                        <input type="text"
                            value={this.state.last_name}
                            placeholder="Last Name"
                            onChange={this.update("last_name")}
                            className="signup-name-input"
                        />
                        <input type="text"
                            value={this.state.email}
                            placeholder="Email"
                            onChange={this.update("email")}
                            className="signup-input"
                        />
                        <input type="password"
                            value={this.state.password}
                            placeholder="Password"
                            onChange={this.update("password")}
                            className="signup-input"
                        />
                        <input type="text"
                            value={this.state.zip_code}
                            placeholder="ZIP CODE"
                            onChange={this.update("zip_code")}
                            className="signup-input"
                        />
                        <label> Birthday Optional
                            <select className="month-birthday">
                                <option placeholder="Month">Month</option>
                                <option value="01">Jan</option>
                                <option value="02">Feb</option>
                                <option value="03">Mar</option>
                                <option value="04">Apr</option>
                                <option value="05">May</option>
                                <option value="06">Jun</option>
                                <option value="07">Jul</option>
                                <option value="08">Aug</option>
                                <option value="09">Sep</option>
                                <option value="10">Oct</option>
                                <option value="11">Nov</option>
                                <option value="12">Dec</option>
                            </select>
                            <select className="day-birthday">
                                <option placeholder="Day">Day</option>
                                <option value="01">01</option>
                                <option value="02">02</option>
                                <option value="03">03</option>
                                <option value="04">04</option>
                                <option value="05">05</option>
                                <option value="06">06</option>
                                <option value="07">07</option>
                                <option value="08">08</option>
                                <option value="09">09</option>
                                <option value="10">10</option>
                                <option value="11">11</option>
                                <option value="12">12</option>
                                <option value="13">13</option>
                                <option value="14">14</option>
                                <option value="15">15</option>
                                <option value="16">16</option>
                                <option value="17">17</option>
                                <option value="18">18</option>
                                <option value="19">19</option>
                                <option value="20">20</option>
                                <option value="21">21</option>
                                <option value="22">22</option>
                                <option value="23">23</option>
                                <option value="24">24</option>
                                <option value="25">25</option>
                                <option value="26">26</option>
                                <option value="27">27</option>
                                <option value="28">28</option>
                                <option value="29">29</option>
                                <option value="30">30</option>
                                <option value="31">31</option>
                            </select>
                            <select className="year-birthday">
                                <option placeholder="Year">Month</option>
                                <option value="2020">2020</option>
                                <option value="2019">2019</option>
                                <option value="2018">2018</option>
                                <option value="2017">2016</option>
                                <option value="2016">2016</option>
                            </select>
                        </label>
 
                        <input className="singup-submit" type="submit" value="Sign Up" />
                        <p className="session-form-foot">Already on Gelp? <Link to="/login">Log in</Link></p>
                    </form>
                </div>
            )
        }
    }

}

export default SessionForm;
