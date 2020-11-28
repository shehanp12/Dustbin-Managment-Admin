import React, {Component} from 'react';

import './splash-screen.css';
import Home from "../Home/Home";
import {
    BrowserRouter as Router,
    Switch, Route, Link
} from "react-router-dom";
import Navbar from "../../Components/NavBars/NavBar";


function LoadingMessage() {
    return (
        <div className="splash-screen">
            Wait a moment while we load your app.
            <div className="loading-dot">.</div>
        </div>
    );
}

function withSplashScreen(WrappedComponent) {
    return class extends Component {
        constructor(props) {
            super(props);
            this.state = {
                loading: true,
            };
        }

        async componentDidMount() {
            try {

                setTimeout(() => {
                    this.setState({
                        loading: false,
                    });
                }, 1500)
            } catch (err) {
                console.log(err);
                this.setState({
                    loading: false,
                });
            }
        }

        render() {
            // while checking user session, show "loading" message
            if (this.state.loading) return LoadingMessage();

            // otherwise, show the desired route
            return <Navbar/>

        }
    };
}

export default withSplashScreen;
