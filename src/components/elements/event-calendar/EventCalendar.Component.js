import React from "react";
import './EventCalendar.Component.scss'

class EventCalendarComponent extends React.Component{
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <div className="calendar-wrap">
                <div className="calendar-body">
                    <div className="month">
                        <ul>
                            <li className="prev">❮</li>
                            <li className="next">❯</li>
                            <li>
                                <b className="m-name">August</b>
                                <small className="y-name">2017</small>
                            </li>
                        </ul>
                    </div>
                    <ul className="weekdays">
                        <li>M</li>
                        <li>T</li>
                        <li>W</li>
                        <li>T</li>
                        <li>F</li>
                        <li>S</li>
                        <li>S</li>
                    </ul>
                    <ul className="days">
                        <li>1</li>
                        <li>2</li>
                        <li>3</li>
                        <li>4</li>
                        <li>5</li>
                        <li>6</li>
                        <li>7</li>
                        <li>8</li>
                        <li>9</li>
                        <li className="active"><span>10</span><span className="events"><span className="orange" /></span></li>
                        <li>11</li>
                        <li>12 <span className="events"><span className="orange" /> <span className="blue" /><span className="yellow" /> <span className="green" /></span></li>
                        <li>13</li>
                        <li>14</li>
                        <li>15</li>
                        <li>16</li>
                        <li>17</li>
                        <li>18</li>
                        <li>19</li>
                        <li>20</li>
                        <li>21</li>
                        <li>22</li>
                        <li>23</li>
                        <li>24</li>
                        <li>25</li>
                        <li>26</li>
                        <li>27</li>
                        <li>28</li>
                        <li>29</li>
                        <li>30</li>
                        <li>31</li>
                    </ul>
                </div>
                <div className="legend">
                    <span className="entry orange">Work</span>
                    <span className="entry blue">Personal</span>
                    <span className="entry yellow">Family</span>
                    <span className="entry green">Other</span>
                </div>
            </div>

        );
    }
}

export default EventCalendarComponent;