import React from 'react';
import { Link } from 'react-router-dom';

class NavBar extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            show: false
        }
        this.handleBlur = this.handleBlur.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    handleBlur(e) {
        this.setState(
            {show: false}
        )
    }

    handleClick() {
        this.setState(
            {show: !this.state.show}
        )
    }

    render() {
        return this.props.currentUser ? (
            <div className="nav-logged-in">
                <ul className="nav-list">
                    <li>
                        <Link to="/"><img className="gelplogo" src={window.gelpLogoURL} /></Link>
                    </li>
                    <li>
                        Search Bar Here
                    </li>
                    <li>
                        Write a Review
                    </li>
                    <li className="nav-dropdown">
                        <i id="dropdown-container" className="fas fa-user-circle" onClick={this.handleClick}></i>
                            {this.state.show ? (
                                <ul className="nav-dropdown-box">
                                    <li><i className="far fa-user-circle"></i><p>About Me</p></li>
                                    <li onClick={this.props.logout}><i className="fas fa-sign-out-alt"></i><p>Log Out</p></li>
                                </ul>
                            ) : null }
                    </li>
                </ul>
                    
            </div>
        ) : 
        (
            <div className="nav-logged-out">
                <div className="nav-links">
                    <Link to="/login">Login</Link>
                    <Link to="/signup">Sign up</Link>
                </div>
            </div>
        )
    }
}

export default NavBar;


