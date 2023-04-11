import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
    return (
        <div className="navbar">

            <Link className='Link' to="">BMI Calculator</Link>
            <div className='LinkTag'>

                <Link className='Links' to="/user-section">Users</Link>
                <Link className='Links' to="/bmi-calculator">BMI</Link>
            </div>
        </div>
    )
}

export default Navbar;
