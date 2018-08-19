import React, {Component} from 'react';
import ThemeStyle from '../../../utils/ThemeStyle';
import {NavLink} from "react-router-dom";
import DayPickerInput from 'react-day-picker/DayPickerInput';




class RegisterComponent extends Component {
    constructor(props, context) {
        super(props, context);
        this.dateOfBirth = this.dateOfBirth.bind(this);
        this.handleInputs = this.handleInputs.bind(this);
        this.state = {
            first_name: null,
            last_name: null,
            email:null,
            password: null,
            family_name: null,
            dateOfBirth: null,
            gender: null,

        };
    }

    dateOfBirth(day, { selected }) {
        this.setState({
            dateOfBirth: selected ? undefined : day,
        }, ()=>{
            console.log(this.state);
        });
    }
    handleInputs(e){
        const name = e.target.name;
        const value = e.target.value;
        this.setState({[name]: value}, ()=>{
            console.log(this.state);
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
                        <p>{this.state.selectedDay
                            ? this.state.selectedDay.toLocaleDateString()
                            : 'Please select a day 👻'}</p>
                    </div>
                    <div className="wrap-elements">
                        <div className="inputs input-half">
                            <div className="input loaded animate">
                                <label htmlFor="">First Name</label>
                                <input onChange={this.handleInputs} type="text" name={`first_name`} defaultValue={``}/>
                            </div>
                        </div>
                        <div className="inputs input-half">
                            <div className="input loaded animate">
                                <label htmlFor="">Last Name</label>
                                <input type="text" onChange={this.handleInputs} name={`last_name`} defaultValue={``}/>
                            </div>
                        </div>

                    </div>
                    <div className="wrap-elements">
                        <div className="inputs">
                            <div className="input loaded animate">
                                <label htmlFor="">Email Address</label>
                                <input type="email" onChange={this.handleInputs} name={`email`}  defaultValue={``}/>
                            </div>
                        </div>

                    </div>
                    <div className="wrap-elements">
                        <div className="inputs">
                            <div className="input loaded animate">
                                <label htmlFor="">Password</label>
                                <input type="password" onChange={this.handleInputs} name={`password`}  defaultValue={``}/>
                            </div>
                        </div>

                    </div>
                    <div className="wrap-elements">
                        <div className="inputs">
                            <div className="input loaded animate">
                                <label htmlFor="">Family Name</label>
                                <input type="text" onChange={this.handleInputs} name={`family_name`} defaultValue={``}/>
                            </div>
                        </div>

                    </div>
                    <div className="wrap-elements">
                        <div className="inputs input-half">
                            <div className="input loaded animate">
                                <label htmlFor="">Date of Birth</label>
                                <DayPickerInput
                                    selectedDays={this.state.dateOfBirth}
                                    onDayChange={this.dateOfBirth}
                                placeholder={``} name={`DOB`}/>
                            </div>
                        </div>
                        <div className="inputs input-half">
                            <div className="select-wrapper">
                                <select name="gender" className="pro-link-select" onChange={this.handleInputs}>
                                    <option value="Gender" selected={true} disabled={true}>Gender</option>
                                    <option value="Male">Male</option>
                                    <option value="Female">Female</option>
                                    <option value="Other">Other</option>
                                </select>
                            </div>
                        </div>
                    </div>

                    <div className="form-footer">
                        <div className="ec-term">
                            <div className="pro-link-radio">
                                <input type="radio" id="ch-term" name="terms" onChange={this.handleInputs}/>
                                    <label htmlFor="ch-term">I am agree with prolinker terms &amp; conditions. </label>
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