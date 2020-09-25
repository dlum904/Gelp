import React from "react";
import { Route, Switch } from 'react-router-dom';

import { AuthRoute, ProtectedRoute } from '../util/route_util';
import NavBarContainer from './nav_bar/nav_bar_container';
import SignUpFormContainer from './session_form/signup_form_container';
import LogInFormContainer from './session_form/login_form_container';
import Splash from './splash/splash';

const App = () => (
    <div>
        <header>
        <NavBarContainer />
        </header>
        <Switch>

            <AuthRoute path="/login" component={LogInFormContainer} />
            <AuthRoute path="/signup" component={SignUpFormContainer} />
            <Route path="/" component={Splash} />
        </Switch>

        <footer>
            <a href="https://www.linkedin.com/in/dennis-lum-12526b7a/">linkedin</a>
        </footer>
    </div>
);

export default App;