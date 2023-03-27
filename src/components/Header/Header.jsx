import React from 'react';
import logo from '../../images/Logo.svg';
import './header.css';
const Header = () => {
    return (
        <div className='header-navber-container'>
            <div>
                <img src={logo} alt="" />
            </div>
            <nav className='header-menu-ber'>
                <a href="/Order">Order</a>
                <a href="/Order Review">Order Review</a>
                <a href="/Manage Inventory">Manage Inventory</a>
                <a href="/Login">Login</a>
            </nav>
        </div>
    );
};

export default Header;