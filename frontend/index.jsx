import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';
import * as BusinessActions from './actions/businesses_actions';
import * as ScheduleActions from './actions/schedules_actions';
import * as ReviewActions from './actions/reviews_actions';

document.addEventListener("DOMContentLoaded", () => {
    const root = document.getElementById("root");

    let store;
    if (window.currentUser) {
        const preloadedState = {
            entities: {
                users: { [window.currentUser.id]: window.currentUser }
            },
            session: { id: window.currentUser.id }
        };
        store = configureStore(preloadedState);
        delete window.currentUser;
    } else {

        store = configureStore();
    }

    // window.dispatch = store.dispatch;
    // window.getState = store.getState;
    // window.fetchBusinesses = BusinessActions.fetchAllBusinesses;
    // window.fetchReviews = ReviewActions.fetchAllReviews;
    // window.fetchSchedules  = ScheduleActions.fetchSchedules;

    ReactDOM.render(<Root store={store} />, root);
});