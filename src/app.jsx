import React from 'react';
import NavBar from './NavBar';

import '../styles/app.css';
import '../styles/NavBar.css';
import '../styles/addProperty.css';

import { library } from '@fortawesome/fontawesome-svg-core';
import { faGhost } from '@fortawesome/free-solid-svg-icons';
import {
  Router, Route, Switch, link,
} from 'react-router';

import AddProperty from './addProperty';
import Properties from './properties';

library.add(faGhost);

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <React.Fragment>
      <NavBar />
      <Switch>
      <Route exact path="/" component={Properties} />
      <Route exact path="/add-property" component={AddProperty} />
    </Switch>
    </React.Fragment>
    );
  }
}


export default App;
