import React from "react";

class CategoryTabComponent extends React.Component{
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <div className="cat-tab">
                <div className="pro-link-tabs">
                    <a href="#" className="tab active">Pro Netwrok</a>
                    <a href="#" className="tab">My Matrimony</a>
                </div>
            </div>

        );
    }
}

export default CategoryTabComponent;