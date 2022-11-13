import React, {Component} from 'react';
import {Link} from "react-router-dom";

class Header extends Component {


    constructor(props) {
        super(props);

        this.state = {}
    }

    render() {

        return (
            <div>
               <header>
                   <nav className="navbar navbar-expand-lg navbar-dark bg-black">
                       <div className="container-fluid">
                           <a className="navbar-brand" href="/">
                               School Registration System
                           </a>
                           <div className="collapse navbar-collapse" id="navbarNav">
                               <ul className="navbar-nav">
                                   <li className="nav-item active">
                                       <a className="nav-link mx-3" href="/viewstudent">Students</a>
                                   </li>
                                   <li className="nav-item">
                                       <a className="nav-link mx-3" href="/viewcourse">Courses</a>
                                   </li>
                               </ul>
                           </div>
                       </div>
                   </nav>
               </header>
            </div>
        );
    }
}

export default Header;
