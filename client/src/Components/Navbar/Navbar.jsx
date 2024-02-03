import React from 'react';
import './Navbar.css';
import { useState } from 'react';
import { useLocation, Link } from 'react-router-dom';

const Navbar = () => {
    const[clicked, setClicked] = useState(false);
    const location = useLocation();

    return (
        <div className='nav'>
            <div className="navbar">
                <div className="logo">
                    <span className='colorText'>Ravenshaw </span>
                    <span> University</span>
                </div>

                <div className={clicked ? `pages navActive` : `pages`} onClick={()=>setClicked(!clicked)} >
                    <Link to="/" className={`${location.pathname === '/' ? 'active' : ''}`}>Home</Link>
                    <Link to="/consult" className={`${location.pathname === '/consult' ? 'active' : ''}`}>Consult</Link>
                    <Link to="/profile" className={`${location.pathname === '/profile' ? 'active' : ''}`}>Profile</Link>
                    <Link to="/contact" className={`${location.pathname === '/contact' ? 'active' : ''}`}>Contact Us</Link>
                </div>

                <div className="icon">
                    <i
                     className={!clicked?`bx bx-menu`:`bx bx-x`}
                     onClick={()=>setClicked(!clicked)}
                     >
                     </i>
                </div>
            </div>
        </div>
    )
}

export default Navbar