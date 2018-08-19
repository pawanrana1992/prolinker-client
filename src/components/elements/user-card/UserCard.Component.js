import React from "react";
import './UserCard.Component.scss'

class UserCardComponent extends React.Component{
    constructor(props) {
        super(props);

    }

    render(){
        return(
            <div className="user-card">
                <div className="user-card-header">
                    <div className="user-extra-lg bg-dynamic">
                        <img src="https://lh5.googleusercontent.com/-UPeB8Pk7cRw/AAAAAAAAAAI/AAAAAAAAAHQ/eSP6qV_nSwM/photo.jpg" alt />
                    </div>
                    <div className="user-hd-data">
                        <span className="tl">Pawan Rana</span>
                        <small>Delhi — India</small>
                    </div>
                </div>
                <div className="user-card-body">
                    <ul className="quick-info">
                        <li>
                            <a href="#"><span>52</span>
                                <small>Contacts</small>
                            </a>
                        </li>
                        <li>
                            <a href="#"><span>512</span>
                                <small>Following</small>
                            </a>
                        </li>
                        <li>
                            <a href="#"><span>325</span>
                                <small>Followers</small>
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="user-card-footer">
                    <button className="btn btn-pink btn-small">Profile</button>
                    <button className="btn btn-pink btn-small">Resume</button>
                </div>
            </div>

        )
    }

}

export default UserCardComponent;