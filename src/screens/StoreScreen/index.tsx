import React, {Component} from 'react';
import {BrowserRouter as Router} from "react-router-dom";

import {NavBar} from '../../components';


class StoreScreen extends Component<any, any> {
  constructor(props: any) {
    super(props);
  }

  render() {

    return (
      <Router>
        <div className="App wrapper">
          <NavBar/>
          <p>Hello</p>
        </div>
      </Router>
    );
  }
}


export default StoreScreen;
