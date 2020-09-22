import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';

document.addEventListener("DOMContentLoaded", () => {
    const root = document.getElementById("root");
    const store = configureStore();
    window.getState = store.getState;
    // window.dispatch = store.dispatch;
    // window.signup = signup;
    // window.login = login;
    // window.logout = logout;

    ReactDOM.render(<Root store={store} />, root);
});

// user = { 1: { id: 1, first_name: "dennis", last_name: "lum", email: "dlum@.com", zip_code: "11234" } }