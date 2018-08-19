import React from "react";
import CategoryTabComponent from "./CategoryTab.Component";
import StatusFormComponent from "./StatusForm.Component";

import './WritePostForm.Component.scss'

class WritePostFormComponent extends React.Component{
    constructor(props) {
        super(props);

    }
    render(){
        return(
            <div className={`w-100`}>
                <CategoryTabComponent/>
                <StatusFormComponent/>
            </div>
        )
    }

}

export default WritePostFormComponent;