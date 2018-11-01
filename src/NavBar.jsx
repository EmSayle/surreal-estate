import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../styles/NavBar.css';

const NavBar = () => (
  <div className="NavBar">
    <div className="textlogo">
      <i className="fab fa-fort-awesome">Surreal Estate</i>
    </div>
    <ul className="nav">
      <li className="item">
        <button>View Property</button>
      </li>
      <li className="item">
        <button>Add Property</button>
      </li>
    </ul>
  </div>
);


export default NavBar;
