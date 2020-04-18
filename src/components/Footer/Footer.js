import React, { Component } from 'react';
import { Link } from 'react-router-dom';


function Footer () {
    return (
        <div>
            <ul>
                <li><Link to="/about">ABOUT</Link></li>
                <li><Link to="/direction">DIRECTION</Link></li>
                <li><Link to="/help">HELP</Link></li>
                <li><Link to="/partners">PARTNERS</Link></li>
            </ul>
        </div>
    );
}


export default Footer;