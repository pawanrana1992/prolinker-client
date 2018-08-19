import {NavLink} from "react-router-dom";
import React from "react";
import './Error404.Component.scss'

class Error404Component extends React.Component{
    constructor(props) {
        super(props);

    }

    render() {
        return (
           <section className="main error404">
               <div className="center">
                   <div className="obj">
                       <div className="illustration">
                           <img src="/images/ui/error404.svg" alt=""/>
                       </div>
                       <div className="obj-footer">
                           <h2 className={`title`}>It's look like you are lost!</h2>
                           <NavLink to={'/home'} className={`btn btn-blue`}>
                               Back to home
                           </NavLink>
                       </div>
                   </div>
               </div>
           </section>
        );
    }

}

export default Error404Component;