import React, {Component} from 'react';
import ThemeStyle from '../../../utils/ThemeStyle';
import {NavLink} from "react-router-dom";
class LoginComponent extends Component {
    componentDidMount(){
        //add form theme style
        ThemeStyle();
    }
    render() {
        return (
            <div className={`form fade_in`}>
                <form action="" className={'form__box'}>
                    <div className="form-title">
                        <div className="logo">
                        </div>
                        <h2 className={`title`}>Login Now</h2>
                    </div>
                    <div className="wrap-elements">
                        <div className="inputs">
                            <div className="input loaded animate">
                                <label htmlFor="">Email Address</label>
                                <input type="email"  defaultValue={``}/>
                            </div>
                        </div>

                    </div>
                    <div className="wrap-elements">
                        <div className="inputs">
                            <div className="input loaded animate">
                                <label htmlFor="">Password</label>
                                <input type="password"  defaultValue={``}/>
                            </div>
                        </div>

                    </div>

                    <div className="form-footer">
                        <p className={`small ec-term`}>
                            <NavLink to='/auth/register' className="">
                                Forget Password ?
                            </NavLink>
                        </p>
                        <button className={`btn btn-green`}>Submit</button>
                        <p className={`small`}>
                            Don't have an account ?  <NavLink to='/auth/register' className="">
                            Register
                        </NavLink>
                        </p>

                    </div>

                </form>
            </div>
        );
    }
}

export default LoginComponent;