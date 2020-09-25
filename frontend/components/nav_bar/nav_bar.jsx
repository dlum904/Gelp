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
            <div className="dropdown-nav">dropdown here
                <button onBlur={this.handleBlur} onClick={this.handleClick}>
                    <i>icon here</i>
                    </button>
                    {this.state.show ? (
                        <ul>
                            <li><i>icon here</i>About Me</li>
                            <li><p onClick={this.props.logout}><i>icon here</i>Log Out</p></li>
                        </ul>
                    ) : null }
            </div>
        ) : 
        (
            <div className="logged-out-nav">
                <div className="nav-links">
                    <Link to="/login">Login</Link>
                    <Link to="/signup">Sign up</Link>
                </div>
            </div>
        )
    }
}

export default NavBar;


