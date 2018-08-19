import React from "react";
import './BirthdayCard.Component.scss'

class BirthdayCardComponent extends React.Component{
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <div className="event-card bg-dynamic">
                <div className="birth-card-header">
                    <div className="left">
                        <span className="ion-beer" />
                    </div>
                    <div className="right">
                        <a href="#" className><span className="ion-more" /></a>
                    </div>
                </div>
                <div className="birth-card-body">
                    <a href="#" className="user-lg">
                        <img src="https://lh5.googleusercontent.com/-UPeB8Pk7cRw/AAAAAAAAAAI/AAAAAAAAAHQ/eSP6qV_nSwM/photo.jpg" alt />
                    </a>
                    <div className="birth-card-data">
                        <span className="brth-day">Today is</span>
                        <p className="wish-nm">Minakshi sinha<span>'s</span><span className="d-block">Birthday</span></p>
                        <p className="article">
                            Leave <span>her</span> a message with your best
                            wishes on <span>her</span> profile page!
                        </p>
                    </div>
                </div>
            </div>

        );
    }

}

export default BirthdayCardComponent;