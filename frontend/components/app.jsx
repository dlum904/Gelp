import React from "react";
import {
    Route,
    Redirect,
    Switch,
    Link,
    HashRouter
} from 'react-router-dom';

import NavBarContainer from './nav_bar/nav_bar_container';
import SignUpFormContainer from './session_form/signup_form_container';
import LogInFormContainer from './session_form/login_form_container';
import Search from './search/search';

const App = () => (
    <div>
        <header>
        <NavBarContainer />
        </header>
        <Switch>

            <Route path="/login" component={LogInFormContainer} />
            <Route path="/signup" component={SignUpFormContainer} />
            <Route path="/" component={Search} />
        </Switch>

        <footer>
            <a href="https://www.linkedin.com/in/dennis-lum-12526b7a/">linkedin</a>
        </footer>
    </div>
);

export default App;