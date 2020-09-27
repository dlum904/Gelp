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
            </div>
        )
    }
}

export default Splash;