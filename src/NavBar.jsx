import React from 'react';
import '../styles/NavBar.css';
import { Link } from 'react-router-dom';


const NavBar = () => (

  <div className="NavBar">
    <div className="textlogo">
      <i className="fab fa-houzz fa-4x" />
    </div>
    <ul className="nav">
      <li className="item">Surreal Estate</li>
      <Link to="/"className="item"><button className="button">View Property</button></Link>
      <Link to="/add-property" className="item"><button className="button">Add Property</button></Link>
    </ul>
  </div>
);


export default NavBar;
