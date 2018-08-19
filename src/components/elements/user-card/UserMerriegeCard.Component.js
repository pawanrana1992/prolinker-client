import React from "react";
import './UserCard.Component.scss'

class UserMerriegeCardComponent extends React.Component{
    constructor(props) {
        super(props);

    }

    render(){
        return(
            <div className="mrg-card">
                <div className="user-card-header">
                    <div className="user-extra-lg">
                        {/*<img src="https://lh5.googleusercontent.com/-UPeB8Pk7cRw/AAAAAAAAAAI/AAAAAAAAAHQ/eSP6qV_nSwM/photo.jpg" alt="">*/}
                    </div>
                    <div className="user-hd-data">
                        <span className="tl">Pawan Rana</span>
                        <small>Engineer — India</small>
                    </div>
                </div>
                <div className="user-card-body">
                    <ul className="quick-info">
                        <li>
                            <a href="#"><span>5'5"</span>
                                <small>Height</small>
                            </a>
                        </li>
                        <li>
                            <a href="#"><span>24</span>
                                <small>Age</small>
                            </a>
                        </li>
                        <li>
                            <a href="#"><span>Hindu</span>
                                <small>Caste</small>
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="user-card-footer">
                    <button className="btn btn-white btn-small">Accept</button>
                    <button className="btn btn-white btn-small">Suggest</button>
                </div>
            </div>

        )
    }

}

export default UserMerriegeCardComponent;