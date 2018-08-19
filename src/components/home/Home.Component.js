import React from "react";
import AppNavigationComponent from "../elements/app-navigation/AppNavigation.component";
import UserCardComponent from "../elements/user-card/UserCard.Component";
import WritePostFormComponent from "../elements/write-post-form/WritePostForm.Component";
import BirthdayCardComponent from "../elements/birthday-card/BirthdayCard.Component";
import JobSuggetionCardComponent from "../elements/Suggetions/job-suggetion/JobSuggetionCard.Component";
import ContactSuggetionCardComponent from "../elements/Suggetions/contact-suggetion/ContactSuggetionCard.Component";
import UserMerriegeCardComponent from "../elements/user-card/UserMerriegeCard.Component";
import EventCalendarComponent from "../elements/event-calendar/EventCalendar.Component";
import PageSuggetionCardComponent from "../elements/Suggetions/page-suggetion/PageSuggetionCard.Component";
import NewsCardComponent from "../elements/news-card/NewsCard.Component";

class HomeComponent extends React.Component{
    constructor(props) {
        super(props);

    }
    render(){
        return(
            <section className={`main`}>
                <div className="center">
                    <div className="wrap-container">
                        <div className="left-col">
                            <UserCardComponent/>
                            <div className="title-block">
                                <span>Events</span>
                            </div>
                            <EventCalendarComponent/>
                            <div className="title-block">
                                <span>Pages you may like</span>
                            </div>

                            <div className="wrap">
                                <PageSuggetionCardComponent/>
                            </div>

                        </div>
                        <div className="center-col">
                            <WritePostFormComponent/>
                            <NewsCardComponent/>
                        </div>
                        <div className="right-col">
                            <BirthdayCardComponent/>
                            <div className="title-block">
                                <span>Contact Suggestions</span>
                            </div>
                            <div className="wrap">
                                <ContactSuggetionCardComponent/>
                            </div>
                            <div className="title-block">
                                <span>Marriage Proposals</span>
                            </div>
                            <div className="wrap">
                                <UserMerriegeCardComponent/>
                            </div>
                            <div className="title-block">
                                <span>Job Suggestions</span>
                            </div>
                            <div className="wrap">
                                <JobSuggetionCardComponent/>
                            </div>
                        </div>
                    </div>
                </div>
                <AppNavigationComponent/>
            </section>
        )
    }

}

export default HomeComponent;