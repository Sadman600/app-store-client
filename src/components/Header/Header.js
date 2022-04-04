import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <div className='header-container'>
            <nav className='topnav'>
                <Link to='/home'>Home</Link>
                <Link to='/reviews'>Reviews</Link>
            </nav>
        </div>
    );
};

export default Header;