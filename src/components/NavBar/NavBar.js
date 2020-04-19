import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css'

function NavBar () {
    return(
        <div>
            <ul>
                <li><Link to="/home">HOME</Link></li>
                <li><Link to="/">MENU</Link></li>
                <li><Link to="/add">CARD</Link></li>
                <li><Link to="/contactus">CONTACT US</Link></li>
                <li><Link to="/gift">GIFT</Link></li>
                <li><Link to="/sell">BIG SELL</Link></li>
            </ul>
        </div>
    )
}

export default NavBar;
