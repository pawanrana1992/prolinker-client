import React from 'react';
import ReactDOM from 'react-dom';
import './resources/scss/app-style.scss';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import history from "./utils/history";
import {Router} from "react-router-dom";

ReactDOM.render(
    <Router history={history}>
        <App />
    </Router>, document.getElementById('root'));
registerServiceWorker();
