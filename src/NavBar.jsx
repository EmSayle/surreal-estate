import React from 'react';
import '../styles/NavBar.css';
import { Link } from 'react-router-dom';


const NavBar = () => (

  <div className="NavBar">
    <div className="textlogo">
      <i className="fab fa-fort-awesome fa-3x" />
    </div>
    <ul className="nav">
      <li className="item">Surreal Estate</li>
      <Link to="/"className="item"><button className="button">View Property</button></Link>
      <Link to="/add-property" className="item"><button className="button">Add Property</button></Link>
    </ul>
  </div>
);


export default NavBar;


// import React from 'react';
// // import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { Router, Route, Switch, Link } from 'react-router-dom';
// import '../styles/NavBar.css';

// const NavBar = (props) => (

//   <div className="NavBar">
//     <div className="textlogo">
//       <i className="fab fa-fort-awesome fa-3x" />
//     </div>
//     <ul className="nav">
//       <li className="item">Surreal Estate</li>
//       <Link to="/" className="item"><button className="button">View Property</button></Link>
//       <Link to="/add-property" className="item"><button className="button">Add Property</button></Link>
//     </ul>
//   </div>
// );


// export default NavBar;
