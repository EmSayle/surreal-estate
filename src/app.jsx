import React from 'react';
import NavBar from './NavBar';

import '../styles/app.css';
import '../styles/NavBar.css';

import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGhost } from '@fortawesome/free-solid-svg-icons';

library.add(faGhost);

const App = () => {
  return <NavBar />;
};

export default App;
