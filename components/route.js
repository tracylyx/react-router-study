import React, { Component } from 'react';
import { Route, BrowserRouter as Router, Link } from 'react-router-dom';
import ROUTES from '../confs/routeConfs';
import Center from './Center';
import Page1 from './Page1';
import Page2 from './Page2';

export default class PageRouter extends Component {
    getNav() {
        return (
            ROUTES.map((item, i) => (
                <li key={i}>
                    <Link to={item.path}>{item.tabTitle}</Link>
                </li>
            ))
        );
    }
    getRoute(route, i) {
        return (
            <Route
                key={i}
                path={route.path}
                component={route.component}    
            />
        );
    }

    render() {
        return (
            <Router>
                {/* <div>
                    <ul>
                        {this.getNav()}
                    </ul>
                </div> */}

                {
                    ROUTES.map((route, i) => this.getRoute(route, i))
                }
            </Router>
        );
    }
};
