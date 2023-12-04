import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'

const Navbar = () => {
 return (
    <nav>
      <ul>
        <li>
          <Link to="/" className='link'>Home</Link>
        </li>
        <li>
          <Link to="/login" className='link'>Login</Link>
        </li>
        <li>
          <Link to="/products" className='link'>Products</Link>
        </li>
        <li>
          <Link to="/Todo" className='link'>Todo</Link>
        </li>
        <li>
          <Link to="/AboutUs" className='link'>About us</Link>
        </li>
      </ul>
    </nav>
 );
};

export default Navbar;