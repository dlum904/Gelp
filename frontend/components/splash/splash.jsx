import React from 'react';
import { Link } from 'react-router-dom';

class Splash extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="splash-main">
                <div className="main-logo">
                <Link to="/"><img src={window.gelpLogoURL} /></Link>
                </div>
                <form className="main-search" action="blah">
                    <input type="text" placeholder="Search.." name="search"/>
                        <button type="submit">Submit</button>
                </form>
                <div className="sample"><Link to="/businesses/1">Sample Business</Link></div>
            </div>
        )
    }
}

export default Splash;