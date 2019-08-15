import '../scss/common.scss';
import '../scss/header.scss';
import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import {instanceOf} from 'prop-types';
import {Cookies, withCookies} from "react-cookie";

import Home from "./home";

class App extends Component {
    static propTypes = {
        cookies: instanceOf(Cookies).isRequired
    };

    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div>
                <Router>
                    <main>
                        <div className="header">
                            Hello candidate!
                        </div>
                        <Switch>
                            <Route path='/' component={Home}/>
                        </Switch>
                    </main>
                </Router>
            </div>
        );
    }
}

export default withCookies(App);
