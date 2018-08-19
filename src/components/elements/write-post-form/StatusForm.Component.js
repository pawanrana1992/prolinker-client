import React from "react";
import ThemeStyle from "../../../utils/ThemeStyle";

class StatusFormComponent extends React.Component{
    constructor(props) {
        super(props);

    }

    componentDidMount(){
        ThemeStyle();
    }

    render() {
        return (
            <div className="status-form">
                <form action className="wrp-sts-form">
                    <div className="sts-title-wrp">
                        <div className="inputs">
                            <div className="user-medium bg-dynamic usr-pic" />
                            <div className="input loaded animate">
                                <label htmlFor>Today's thought title...</label>
                                <input type="text" defaultValue={``} />
                            </div>
                        </div>
                    </div>
                    <div className="inputs d-none">
                        <div className="input textarea loaded animate">
                            <label htmlFor>Details goes here</label>
                            <textarea name id cols={30} rows={10} defaultValue={""} />
                        </div>
                    </div>
                    <div className="sts-form-footer">
                        <div className="left">
                            <ul>
                                <li><a href className><span className="ion ion-image" /></a></li>
                                <li><a href><span className="ion ion-location" /></a></li>
                                <li><a href><span className="ion ion-link" /></a></li>
                            </ul>
                        </div>
                        <div className="right">
                            <ul>
                                <li><a href className="link">Preview</a></li>
                                <li><a href className="btn btn-blue btn-small">Post</a></li>
                            </ul>
                        </div>
                    </div>
                </form>
            </div>


        );
    }
}

export default StatusFormComponent;