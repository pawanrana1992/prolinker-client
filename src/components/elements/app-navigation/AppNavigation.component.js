import React from "react";

import './AppNavigation.component.scss'

class AppNavigationComponent extends React.Component{
    constructor(props) {
        super(props);

    }
    render(){
        return(
            <header className="app-nav">
                <div className="header__center center">
                    <div className="nav-left">
                        <div className="logo">
                            <a href="#" />
                            {/*css logo*/}
                        </div>
                        <nav>
                            <ul>
                                <li className="mobile-hide">
                                    <a href="#">HR solutions</a>
                                </li>
                                <li className="mobile-hide">
                                    <a href="#">Job</a>
                                </li>
                                <li className="left-border">
                                    <a href="#" className="nav-search"><span className="ion-ios-search" /></a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                    <div className="nav-right">
                        <div className="res-button">
                            <a href="#"><span className="ion-android-menu" /></a>
                        </div>
                        <nav>
                            <ul>
                                <li>
                                    <a href="#">Request</a>
                                </li>
                                <li>
                                    <a href="#">Notif!</a>
                                </li>
                                <li>
                                    <a href="#">Message</a>
                                </li>
                                <li className="left-border usr-menu">
                                    <a href="#"><i className="user-small bg-dynamic" /><span> Me </span><span className="caret" /></a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                    <div className="resp-data">
                        <div className="pro-link-tabs">
                            <ul>
                                <li>
                                    <a href="#" className="tab">Request</a>
                                </li>
                                <li>
                                    <a href="#" className="tab">Notif!</a>
                                </li>
                                <li>
                                    <a href="#" className="tab">Message</a>
                                </li>
                                <li>
                                    <a href="#" className="tab"><i className="user-circle" />Me <span className="caret" /></a>
                                </li>
                            </ul>
                        </div>
                        <div className="tab-data">
                            <div className="tab-body">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. A atque doloribus, ducimus labore nesciunt
                                officia optio soluta velit. Beatae dicta exercitationem ipsam maiores nulla officia perspiciatis
                                praesentium reiciendis rem velit?
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. A atque doloribus, ducimus labore nesciunt
                                officia optio soluta velit. Beatae dicta exercitationem ipsam maiores nulla officia perspiciatis
                                praesentium reiciendis rem velit?
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. A atque doloribus, ducimus labore nesciunt
                                officia optio soluta velit. Beatae dicta exercitationem ipsam maiores nulla officia perspiciatis
                                praesentium reiciendis rem velit?
                            </div>
                        </div>
                    </div>
                </div>
            </header>

        )
    }

}

export default AppNavigationComponent;