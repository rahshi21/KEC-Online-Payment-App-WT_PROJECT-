import React from 'react';
import {Link} from 'react-router-dom';
import './Navbar.css';
const Navbar = () => {
  return (
    <header>
      <nav className="navbar">
        <div className="navbar-logo">KEC SWARAM</div>
        <ul className="navbar-values">
          <li className="navbar-values-item"><a href="/">Home</a></li>
          <li className="navbar-values-item"><a href="/events">Events</a></li>
          <li className="navbar-values-item"><a href="/contact">Contact Us</a></li>
          
          <li> <Link to='/display'><button>REGISTER</button></Link></li>
          
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
