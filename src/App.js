import React, {Component} from 'react';
import {Router, Route, Switch, Redirect, NavLink} from 'react-router-dom';
import AuthComponent from "./components/auth/Auth.Component";
import Moment from 'moment'
import HomeComponent from "./components/home/Home.Component";
import Error404Component from "./components/elements/error-page/404error/Error404.Component";

const AuthRoute = ({component: Component, authenticated, needsAuth = false, redirectTo, location, ...rest}) => {
    if (!redirectTo) {
        redirectTo = {
            pathname: '/auth/login',
            state: {from: location}
        };
    }

    return (
        <Route {...rest} render={(props) => (
            authenticated === needsAuth
                ? <Component {...props} />
                : <Redirect to={redirectTo}/>
        )}/>
    )
};

class App extends Component {
    componentDidMount(){
        Moment();
    }
    render() {
        return (
                <div>
                    <Switch>
                        <Route exact path="/" render={({location}) => <Redirect to={`/auth/login`}/>}/>
                        <Route path="/auth" render={(location) => <AuthComponent/>} />
                        <Route path="/home" render={(location) => <HomeComponent/>} />
                        <Route  render={(location) => <Error404Component/>} />
                    </Switch>
                </div>
        );
    }
}


export default App;
