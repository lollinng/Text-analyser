import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default function Navbar(props) {

    
    // navbar navbar-expand-lg navbar-lightstyle="background-color: #e3f2fd"
    return(  
        <nav className={`navbar navbar-expand-lg navbar-${props.mode} ${props.mode === 'light'?" ":`bg-${props.mode}`}`}  style={{backgroundColor: "#90a4ae"}}>
            <Link className="navbar-brand" to="/#">{props.title}</Link>
                     <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                <li className="nav-item active">
                <Link className="nav-link" to="/">Home <span className="sr-only">(current)</span></Link>
                </li>
                <li className="nav-item">
                <Link className="nav-link" to="/about">{props.about}</Link>
                </li>
                </ul>
            </div>
            
            <div className={`custom-control custom-switch text-${props.mode=== 'light'? 'Dark' : 'light'}`}>
            <input type="checkbox" className="custom-control-input"  onClick={props.toggleMode} id="customSwitch1"/>
            <label className="custom-control-label" htmlFor="customSwitch1">Enable DarkMode</label>
            </div>

        </nav>
    )
}

Navbar.defaultProps = {
    title : 'Set tite here',
    about : 'About text here'
}

Navbar.prototype = {
    title : PropTypes.string.isRequired,
    about : PropTypes.string,
    number : PropTypes.number
}

