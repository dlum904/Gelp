import React from 'react';
import { Link } from 'react-router-dom';
import SearchBox from '../search_box/search_box_container'

class NavBar extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            show: false
        }
        this.handleBlur = this.handleBlur.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    handleBlur() {
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
                        <SearchBox />
                    </li>
                    <li>
                        Write a Review
                    </li>
                    <li className="nav-dropdown">
                        <i id="dropdown-container" className="fas fa-user-circle" onClick={this.handleClick}></i>
                            {this.state.show ? (
                                <ul className="nav-dropdown-box">
                                    <li>
                                        <Link className="about-link"to="/user">
                                            <i className="far fa-user-circle"></i>
                                            About Me
                                        </Link>
                                    </li>
                                    <li>
                                        <div onClick={this.props.logout}>
                                            <i className="fas fa-sign-out-alt"></i>
                                            Log Out
                                        </div>
                                    </li>
                                    <div className="dropdown-background" onClick={this.handleClick}></div>
                                </ul>
                            ) : null }
                    </li>
                </ul>
                    
            </div>
        ) : 
        (
            <div className="nav-logged-out">
                    <ul className="nav-logged-out-list">
                        <li>
                            <Link to="/"><img className="gelplogo" src={window.gelpLogoURL} /></Link>
                        </li>
                        <li>
                            <SearchBox />
                        </li>
                        <li>
                            Write a Review
                    </li>
                        <li>
                            <div className="nav-links">
                                <Link to="/login">Login</Link>
                                <Link to="/signup">Sign up</Link>
                            </div>
                        </li>
                    </ul>
            </div>
        )
    }
}

export default NavBar;


