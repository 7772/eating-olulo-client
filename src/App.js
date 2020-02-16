import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import * as Screens from './screens';


function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Screens.MainScreen}/>
        <Route path="/stores" exact component={Screens.StoreScreen}/>
      </Switch>
    </Router>
  );
}

export default App;
