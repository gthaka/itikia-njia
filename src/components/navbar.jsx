import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class NavBar extends Component {
    linkClass = "nav-link ";
    state = {}
    render() {
        return (
            <header id="nav-header" className="mb-2">
                <div>
                <h3 className="float-md-start mb-0">🏠</h3>
                <nav className="nav nav-masthead justify-content-center float-md-end">
                    <NavLink className={({isActive}) => {return `nav-link ${isActive? "active":""}`}} to="/">Home</NavLink>
                    <NavLink className={({isActive}) => {return `nav-link ${isActive? "active":""}`}}  to="/products">Products</NavLink>
                </nav>
                </div>
            </header>
        );
    }
}

export default NavBar;