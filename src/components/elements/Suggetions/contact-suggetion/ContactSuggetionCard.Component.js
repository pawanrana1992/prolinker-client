import React from "react";

import '../SuggetionsCard.Component.scss'

class ContactSuggetionCardComponent extends React.Component{
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <div className="sugst-card">
                <div className="sugst-card-body">
                    <div className="user-medium bg-dynamic card-user">
                        {/*<img src="" alt="">*/}
                    </div>
                    <div className="sugst-card-data">
                        <span className="tl">Pawan Rana</span>
                        <small>Engineer — India</small>
                    </div>
                    <div className="sugst-card-act">
                        <a href="#" className="btn btn-blue btn-square btn-small"><span className="ion-android-add" /></a>
                    </div>
                </div>
            </div>
        );
    }

}

export default ContactSuggetionCardComponent;