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

    handleSubmit(e) {
        e.preventDefault();
        this.props.processForm(this.state);
    }

    render () {
        if (this.props.formType === "login") {
            return (
                <div className="session-form-container">
                    <form onSubmit={this.handleSubmit} className="session-form-box">
                        <h1>Login to Gelp</h1>
                        <h2>New to Gelp? <Link to="/signup">Sign Up</Link></h2>
                        <input type="text"
                            value={this.state.email}
                            onChange={this.update("email")}
                            className="login-input"
                        />
                        <input type="text"
                            value={this.state.password}
                            onChange={this.update("password")}
                            className="login-input"
                        />
                        <div className="forgot-pw">Forgot password?</div>
                        <input className="login-submit"type="submit" value="Log In"/>
                        <div>New to Gelp? <Link to="/signup">Sign Up</Link></div>
                    </form>
                </div>
            )
        }
        else {
            return (
                <div className="session-form-container">
                    <form onSubmit={this.handleSubmit} className="session-form-box">
                        <h1>Sign up for Gelp</h1>
                        <h2>Connect with great local businesses</h2>

                        <input type="text"
                            value={this.state.first_name}
                            onChange={this.update("first_name")}
                            className="signup-name-input"
                        />
                        <input type="text"
                            value={this.state.last_name}
                            onChange={this.update("last_name")}
                            className="signup-name-input"
                        />
                        <input type="text"
                            value={this.state.email}
                            onChange={this.update("email")}
                            className="signup-input"
                        />
                        <input type="password"
                            value={this.state.password}
                            onChange={this.update("password")}
                            className="signup-input"
                        />
                        <input type="text"
                            value={this.state.zip_code}
                            onChange={this.update("zip_code")}
                            className="signup-input"
                        />
                        <input type="text"
                            value={this.state.birthday}
                            onChange={this.update("birthday")}
                            className="signup-bday-input"
                        />
                        <input className="singup-submit" type="submit" value="Sign Up" />
                        <div>Already on Gelp? <Link to="/login">Log in</Link></div>
                    </form>
                </div>
            )
        }
    }

}

export default SessionForm;
