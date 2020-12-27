import React from "react";
import { Route, Switch } from 'react-router-dom';

import { AuthRoute, ProtectedRoute } from '../util/route_util';
import NavBarContainer from './nav_bar/nav_bar_container';
import SignUpFormContainer from './session_form/signup_form_container';
import LogInFormContainer from './session_form/login_form_container';
import BusinessContainer from './business_page/business_container';
import Splash from './splash/splash_container';
import BusinessPhotoUploadContainer from './business_page/business_photo_upload_container';
import ReviewsIndexContainer from './reviews/reviews_index_container';
import ReviewFormContainer from './reviews/review_form_container';
import UserShowContainer from './user/user_show_container';
import BusinessIndexContainer from './business_page/business_index_container';
import BusinessPhotoIndexContainer from './business_page/business_photo_index_container'

const App = () => (
    <div>
        {/* <header>
        <NavBarContainer />
        </header> */}
        <Switch>
            <AuthRoute path="/login" component={LogInFormContainer} />
            <AuthRoute path="/signup" component={SignUpFormContainer} />
            <Route exact path="/businesses/index" component={BusinessIndexContainer} />
            <Route exact path="/businesses/:businessId" component={BusinessContainer} />
            <Route exact path="/businesses/:businessId/upload" component={BusinessPhotoUploadContainer} /> 
            <Route exact path="/businesses/:businessId/images" component={BusinessPhotoIndexContainer} /> 
            <Route exact path="/businesses/:businessId/reviews" component={ReviewsIndexContainer} />
            <ProtectedRoute exact path="/businesses/:businessId/reviews/create" component={ReviewFormContainer} />
            <ProtectedRoute exact path="/user" component={UserShowContainer} />
            <Route path="/" component={Splash} />
        </Switch>

        <footer>
            <div className="mylinks">
                <a href="https://www.linkedin.com/in/dennis-lum-12526b7a/">Linkedin</a>
                <a href="https://github.com/dlum904"> Git Hub</a>
            </div>
        </footer>
    </div>
);

export default App;