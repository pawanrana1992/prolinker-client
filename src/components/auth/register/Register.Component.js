import React, {Component} from 'react';
import ThemeStyle from '../../../utils/ThemeStyle';
import {NavLink} from "react-router-dom";
import DayPickerInput from 'react-day-picker/DayPickerInput';
class RegisterComponent extends Component {
    constructor(props, context) {
        super(props, context);

        // Initial state with date
        this.state = {
            selectedDate: '2017-08-13'
        };

        // This binding is necessary to make `this` work in the callback
        this.HandleLog = this.HandleLog.bind(this);
    }
    HandleLog(date) {
        this.setState({
            selectedDate: date
        });
    }
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
                        <h2 className={`title`}>Register Now</h2>
                    </div>
                    <div className="wrap-elements">
                        <div className="inputs input-half">
                            <div className="input loaded animate">
                                <label htmlFor="">First Name</label>
                                <input type="text"  defaultValue={``}/>
                            </div>
                        </div>
                        <div className="inputs input-half">
                            <div className="input loaded animate">
                                <label htmlFor="">Last Name</label>
                                <input type="text"  defaultValue={``}/>
                            </div>
                        </div>

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
                    <div className="wrap-elements">
                        <div className="inputs">
                            <div className="input loaded animate">
                                <label htmlFor="">Family Name</label>
                                <input type="text" defaultValue={``}/>
                            </div>
                        </div>

                    </div>
                    <div className="wrap-elements">
                        <div className="inputs input-half">
                            <div className="input loaded animate">
                                <label htmlFor="">Date of Birth</label>

                                <DayPickerInput
                                    month={new Date(1940, 1)}
                                    fromMonth={new Date(1940, 1)}
                                    toMonth={new Date(2010,12)}
                                    fixedWeeks
                                placeholder={``}/>
                            </div>
                        </div>
                        <div className="inputs input-half">
                            <div className="select-wrapper">
                                <select name="" className="pro-link-select">
                                    <option value="Gender" selected={true} disabled={true}>Gender</option>
                                    <option value="Male">Male</option>
                                    <option value="Female">Female</option>
                                    <option value="Other">Other</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    {/*<div className="wrap-elements">*/}
                        {/*<div className="inputs c-width">*/}
                            {/*<div className="select-wrapper">*/}
                                {/*<select name="" className="pro-link-select">*/}
                                    {/*<option value="+91">+91</option>*/}
                                    {/*<option value="011">011</option>*/}
                                    {/*<option value="065">065</option>*/}
                                {/*</select>*/}
                            {/*</div>*/}
                        {/*</div>*/}
                        {/*<div className="inputs c-width">*/}
                            {/*<div className="input loaded animate">*/}
                                {/*<label htmlFor="">Mobile Number</label>*/}
                                {/*<input type="number"  defaultValue={``}/>*/}
                            {/*</div>*/}
                        {/*</div>*/}
                    {/*</div>*/}

                    {/*<div className="wrap-elements">*/}
                        {/*<div className="inputs input-half">*/}
                            {/*<div className="select-wrapper">*/}
                                {/*<select name="" className="pro-link-select">*/}
                                    {/*<option value="Country" selected={true} disabled={true}>Country</option>*/}
                                    {/*<option value="India">India</option>*/}
                                    {/*<option value="Australia">Australia</option>*/}
                                    {/*<option value="UAE">UAE</option>*/}
                                {/*</select>*/}
                            {/*</div>*/}
                        {/*</div>*/}
                        {/*<div className="inputs input-half">*/}
                            {/*<div className="input loaded animate">*/}
                                {/*<label htmlFor="">City</label>*/}
                                {/*<input type="text"  defaultValue={``}/>*/}
                            {/*</div>*/}
                        {/*</div>*/}
                    {/*</div>*/}
                    <div className="form-footer">
                        <div className="ec-term">
                            <div className="pro-link-radio">
                                <input type="radio" id="test5" name="radio-group"/>
                                    <label htmlFor="test5">I am agree with prolinker terms &amp; conditions. </label>
                            </div>
                        </div>
                        <button className={`btn btn-blue`}>Submit</button>
                        <p className={`small`}>
                            Allready have an account ?  <NavLink to='/auth/login' className="">
                            Login
                        </NavLink>
                        </p>

                    </div>

                </form>
            </div>
        );
    }
}



export default RegisterComponent;