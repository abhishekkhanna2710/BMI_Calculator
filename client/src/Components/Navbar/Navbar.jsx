import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
    const handleout = (e) => {
        alert("User Logout Successfully")
    }
    return (
        <div className="navbar">

            <Link className='Link' to="">BMI Calculator</Link>
            <div className='LinkTag'>

                <Link className='Links' to="/bmi-calculator">BMI</Link>
                <Link className='Links' to="/user-section">Users</Link>
                <Link className='Links' to="/bmi-data">BMI Data</Link>
                <Link onClick={handleout} className='Loglink' to="/">Logout</Link>
            </div>
        </div>
    )
}

export default Navbar;
