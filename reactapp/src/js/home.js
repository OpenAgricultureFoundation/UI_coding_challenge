import React, {Component} from 'react';
import {BrowserRouter as Router} from "react-router-dom";
import '../scss/home.scss';
import {withCookies} from "react-cookie";

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {
    };

    render() {
        return (
            <Router>
                <div className="home-container">
                    <div className="status">

                        <div className="row">
                            <div className="col-md-6 text-right">
                                <b>Test</b></div>
                            <div className="col-md-6"> 
                                Test
                            </div>
                        </div>

                    </div>
                </div>
            </Router>
        );
    }
}

export default withCookies(Home);
