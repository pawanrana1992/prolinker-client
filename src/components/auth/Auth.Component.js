import React from "react";
import LoginComponent from "./login/Login.Component";
import RegisterComponent from "./register/Register.Component";
import {Router, Route, Switch, Redirect, NavLink} from 'react-router-dom';
import './Auth.Component.scss'

class AuthComponent extends React.Component {


    render() {
        const {location} = this.props;
        return (
            <section className="main auth">
                <div className="center">
                    <div className="auth__layout">
                        <div className="auth__center">
                            <div className="auth__left">
                                <div className="auth__content">
                                    <div className="logo">
                                    </div>
                                    <h2>
                                        Welcome to the Biggest Professional
                                        & Matrimonial Network in the World
                                    </h2>
                                    <p className={`sub-text`}>We are the best and biggest professional network with 5 billion active users all around the world. Share you thoughts, write blog posts, show your Portfolio, create page, Hire people, Search job and make connection with families for you future partner.</p>
                                </div>
                                <div className="buttons">
                                    <NavLink to='/auth/register' className="btn btn-blue">
                                        Register
                                    </NavLink>
                                </div>
                            </div>
                            <div className="auth__right">
                                <div className="auth__content">
                                    <Switch>
                                        <Route title='login' exact path={`/auth/`} render={()=><Redirect to={`/auth/login`}/>}/>
                                        <Route title='login'  path={`/auth/login`} component={LoginComponent}/>
                                        <Route title='register' path={`/auth/register`} component={RegisterComponent}/>
                                    </Switch>
                                </div>
                            </div>
                        </div>
                    </div>


                </div>
            </section>
        )
    }

}


export default AuthComponent;