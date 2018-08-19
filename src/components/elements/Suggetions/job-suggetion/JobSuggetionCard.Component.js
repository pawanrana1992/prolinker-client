import React from "react";
import '../SuggetionsCard.Component.scss'
class JobSuggetionCardComponent extends React.Component{
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <div className="job-sugst-card">
                <div className="sugst-card-body">
                    <div className="user-medium bg-dynamic card-user">
                        {/*<img src="" alt="">*/}
                    </div>
                    <div className="sugst-card-data">
                        <span className="tl">Pixelden pvt. ltd.</span>
                        <small>Information Technology</small>
                    </div>
                    <div className="sugst-card-act">
                        <a href="#" className="btn btn-blue btn-square btn-small" title="Apply"><span className="ion-ios-bell" /></a>
                    </div>
                </div>
                <div className="sugst-card-ftr">
                    <div className="wrap-ftr">
                        <div>
                            <span className="job-ttl">Ios Developer</span>
                        </div>
                        <div>
                            <small className="exp">Exp 8 Years</small>
                        </div>
                    </div>
                </div>
            </div>

        );
    }

}

export default JobSuggetionCardComponent;