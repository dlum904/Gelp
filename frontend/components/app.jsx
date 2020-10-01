import React from "react";
import { Route, Switch } from 'react-router-dom';

import { AuthRoute, ProtectedRoute } from '../util/route_util';
import NavBarContainer from './nav_bar/nav_bar_container';
import SignUpFormContainer from './session_form/signup_form_container';
import LogInFormContainer from './session_form/login_form_container';
import BusinessContainer from './business_page/business_container';
import Splash from './splash/splash';
import BusinessPhotoUploadContainer from './business_page/business_photo_upload_container'

const App = () => (
    <div>
        <header>
        <NavBarContainer />
        </header>
        <Switch>
            <AuthRoute path="/login" component={LogInFormContainer} />
            <AuthRoute path="/signup" component={SignUpFormContainer} />
            <Route exact path="/businesses/:businessId" component={BusinessContainer} />
            <Route path="/businesses/:businessId/upload" component={BusinessPhotoUploadContainer} /> 
            <Route path="/" component={Splash} />
        </Switch>

        <footer>
            <a href="https://www.linkedin.com/in/dennis-lum-12526b7a/">linkedin</a>
        </footer>
    </div>
);

export default App;