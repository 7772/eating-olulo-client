import React, {Component} from 'react';
import {BrowserRouter as Router} from "react-router-dom";


class MainScreen extends Component {
  render() {
    return (
      <Router>
        <div className="App wrapper">Hello.</div>
      </Router>
    );
  }
}


export default MainScreen;
