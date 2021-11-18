import React from 'react';
import {Link} from 'react-router-dom';

const Menu = () => (
    <ul>
        <li>
            <Link to="/home">Main Page</Link>
        </li>
        <li>
            <Link to="/about">About Us</Link>
        </li>
        <li>
            <Link to="/news">News</Link>
        </li>
    </ul>
);

export default Menu;